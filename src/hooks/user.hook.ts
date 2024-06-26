"use client";

import {
  AuthData,
  UserBalance,
  UserInterface,
} from "@/interfaces/user.interface";
import { setSwitchChain } from "@/slices/account/switch-chain.slice";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  useAccount,
  useDisconnect,
  useReadContract,
  useSwitchChain,
  useAccountEffect,
  useConnect,
} from "wagmi";
import useStorage from "./storage.hook";
import { useAppSelector } from "./redux.hook";
import {
  selectAuth,
  selectConnector,
  setAuth,
  setConnector,
  setIsConnected,
} from "@/slices/account/auth.slice";
import DexaPay from "@/contracts/DexaPay";
import { DEXA_PAY } from "@/config/constants";
import { toOxString, walletToLowercase, weiToUnit } from "@/libs/helpers";
import { StorageTypes } from "@/libs/enums";
import {
  selectHideBalance,
  setHideBalance,
} from "@/slices/account/hide-balance.slice";
import { initLogout } from "@/actions/auth.action";
import { Tokens } from "@/libs/tokens";
import useConverter from "./converter.hook";

const dexaPayAddr = toOxString(DEXA_PAY);

function useUser() {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useDispatch();
  const isAuth = useAppSelector(selectAuth);
  const { isConnected, id, wallet } = useAppSelector(selectConnector);
  const isHidden = useAppSelector(selectHideBalance);
  const [user, setUser] = useState<UserInterface>();
  const [profileProgress, setProfileProgress] = useState<number>();
  const [balances, setBalances] = useState<UserBalance[]>([]);
  const [totalValue, setTotalValue] = useState<UserBalance>();
  const { connectors } = useConnect();
  const { address, isDisconnected, chainId, isReconnecting } = useAccount();
  const { chains } = useSwitchChain();
  const { disconnect } = useDisconnect();
  const { usdRate, ethRate } = useConverter();
  const { getItem, setItem } = useStorage();
  const { data, refetch: findUser } = useReadContract({
    abi: DexaPay,
    address: dexaPayAddr,
    functionName: "findUser",
    args: [toOxString(address)],
    query: { enabled: wallet ? true : false },
  });

  const { data: bal } = useReadContract({
    abi: DexaPay,
    address: dexaPayAddr,
    functionName: "getBalances",
    args: [toOxString(address)],
  });

  useAccountEffect({
    onConnect(data) {
      if (data.address) {
        dispatch(
          setConnector({
            id: data.connector.id,
            isConnected: true,
            wallet: data.address,
            chainId: data.chainId,
          })
        );
      }
    },
    onDisconnect() {
      logout();
    },
  });

  useEffect(() => {
    const init = async () => {
      if (!bal) return;
      const userBal = (bal as any[])
        .map((balance: UserBalance) => {
          const token = Tokens.find(
            (t) =>
              walletToLowercase(t.address) ===
              walletToLowercase(balance.tokenAddress)
          );
          const amt =
            Number(balance.balance) > 0 ? weiToUnit(balance.balance) : "0";
          const usdEqv =
            Object.keys(usdRate).length > 0
              ? usdRate[`${token?.id}`] * Number(amt)
              : undefined;
          return { ...balance, usdValue: usdEqv, ...(token || {}) };
        })
        .sort((a, b) => Number(b.usdValue) - Number(a.usdValue));
      if (Object.keys(ethRate).length > 0 && Object.keys(usdRate).length > 0) {
        const convertedTotal = userBal.reduce((acc, token) => {
          const amt = Number(token.balance) > 0 ? weiToUnit(token.balance) : 0;
          return acc + amt * (ethRate[`${token.id}`] || 0);
        }, 0);
        const usdEquiv = usdRate["ethereum"] * convertedTotal;
        const ethToken = Tokens.find((t) => t.id == "ethereum");
        const payload: UserBalance = {
          ...ethToken,
          balance: `${convertedTotal}`,
          tokenAddress: "",
          usdValue: usdEquiv,
        };
        setTotalValue(payload);
      }
      setBalances(userBal);
    };
    init();
  }, [bal, usdRate, ethRate, user?.wallet]);

  useEffect(() => {
    const isHidden = getItem(StorageTypes.DEXA_HIDE_BAL);
    dispatch(setHideBalance(!!isHidden));
  }, [isHidden]);

  useEffect(() => {
    const init = () => {
      if (data) {
        const userData = data as any;
        setUser({
          id: `${address}`,
          ...userData,
        });
      }
    };
    init();
  }, [isConnected, isAuth, data]);

  useEffect(() => {
    const checkChain = () => {
      const isChain = chains.find((c) => c.id == chainId);
      if (!isChain && isConnected) {
        dispatch(setSwitchChain(true));
      } else {
        dispatch(setSwitchChain(false));
      }
    };
    checkChain();
  }, [chainId, chains, isConnected]);

  const logout = () => {
    const connector = connectors.find((c) => c.id === id);
    disconnect(
      { connector },
      {
        onSuccess: async () => {
          dispatch(
            setConnector({
              id: undefined,
              isConnected: false,
              wallet: undefined,
              chainId: undefined,
            })
          );
          dispatch(setAuth(false));
          await initLogout();
        },
      }
    );
  };

  return {
    logout,
    user,
    profileProgress,
    setProfileProgress,
    isAuth,
    findUser,
    balances,
    totalValue,
  };
}

export default useUser;
