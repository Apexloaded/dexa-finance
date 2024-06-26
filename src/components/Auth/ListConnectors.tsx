"use client";

import React, { useCallback, useEffect, useState } from "react";
import Button from "../Form/Button";
import Image from "next/image";
import { Connector, useAccount, useConnect, useDisconnect } from "wagmi";
import { baseSepolia } from "viem/chains";
import useToast from "@/hooks/toast.hook";
import { connectorIcons } from "@/components/Icons/Connector";
import { getWagmiError } from "@/libs/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import {
  selectConnector,
  selectIsConnected,
  setConnector,
  setIsConnected,
} from "@/slices/account/auth.slice";
import { useAuth } from "@/context/auth.context";

type Props = {
  setSignModal?: (value: boolean) => void;
  onCloseModal?: (value: boolean) => void;
};

function ListConnectors({ setSignModal, onCloseModal }: Props) {
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState(false);
  const { loading, error: tError, success } = useToast();
  const { logout } = useAuth();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected, id, wallet } = useAppSelector(selectConnector);

  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  const connectToWallet = async (connector: Connector) => {
    try {
      if (!isConnected) {
        loading({ msg: "Authenticating..." });
        connect(
          { connector, chainId: baseSepolia.id },
          {
            onSuccess(data, variables, context) {
              success({ msg: "Wallet connected" });
              if (setSignModal) setSignModal(true);
              if (onCloseModal) onCloseModal(false);
              dispatch(
                setConnector({
                  id: connector.id,
                  wallet: data.accounts[0],
                  isConnected: true,
                  chainId: data.chainId,
                })
              );
            },
            onError(error, variables, context) {
              tError({ msg: getWagmiError(error.message) });
            },
          }
        );
        return;
      }
      if (setSignModal) setSignModal(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      {isConnected && (
        <Button kind="clear" onClick={logout}>
          Disconnect
        </Button>
      )}

      {isClient &&
        connectors &&
        connectors.map((connector) => (
          <Button
            key={connector.uid}
            kind={`default`}
            onClick={() => connectToWallet(connector)}
            className="py-[1rem] capitalize border-b border-primary/50 hover:bg-primary/5 rounded-none last:border-none"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {connectorIcons[connector.id] ? (
                  <Image
                    src={connectorIcons[connector.id].icon}
                    alt={connectorIcons[connector.id].key}
                    height={25}
                    width={25}
                  />
                ) : (
                  <Image
                    unoptimized
                    src={decodeURIComponent(`${connector.icon}`)}
                    alt={""}
                    height={25}
                    width={25}
                  />
                )}
                <span className="ml-3 font-medium">{connector.name}</span>
              </div>
              {connector.id === "coinbaseWalletSDK" && (
                <span className="text-xs bg-primary text-white px-3 rounded-sm">
                  Smart
                </span>
              )}
            </div>
          </Button>
        ))}
    </>
  );
}

export default ListConnectors;
