"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/Form/Button";
import Radio from "@/components/Form/Radio";
import WalletSearch from "@/components/Wallet/WalletSearch";
import Header from "@/components/ui/Header";
import TabsRoot from "@/components/Tabs/TabsRoot";
import TabsList from "@/components/Tabs/TabsList";
import TabsHeader from "@/components/Tabs/TabsHeader";
import TabsContent from "@/components/Tabs/TabsContent";
import AssetsTable from "@/components/Wallet/AssetsTable";
import { useConverter } from "@/context/currency.context";
import { useDexa } from "@/context/dexa.context";
import { useAuth } from "@/context/auth.context";
import { useReadContract } from "wagmi";
import { formatCur, walletToLowercase, weiToUnit } from "@/libs/helpers";
import { UserBalance } from "@/interfaces/user.interface";
//import { Tokens } from "@/config/tokens";
import { useAppSelector, useAppDispatch } from "@/hooks/redux.hook";
import {
  selectHideBalance,
  setHideBalance,
} from "@/slices/account/hide-balance.slice";
import useStorage from "@/hooks/storage.hook";
import { StorageTypes } from "@/libs/enums";
import ListTransactions from "@/components/Wallet/ListTransactions";
import QuickAction from "@/components/Home/quick-actions/QuickAction";
import TransferModal from "@/components/Wallet/TransferModal";
import WithdrawModal from "@/components/Wallet/WithdrawModal";
import InfoCard from "@/components/Home/cards/InfoCard";
import {
  BackpackIcon,
  LockIcon,
  PlusIcon,
  WalletMinimalIcon,
} from "lucide-react";
import ActiveBillsTab from "@/components/Bills/ActiveBillsTab";
import Section from "@/components/layouts/Section";
import Aside from "@/components/layouts/Aside";
import Container from "@/components/layouts/Container";
// import TransferModal from "@/components/Wallet/TransferModal";
// import WithdrawModal from "@/components/Wallet/WithdrawModal";

function Bills() {
  const isHidden = useAppSelector(selectHideBalance);
  const dispatch = useAppDispatch();
  const [balances, setBalances] = useState<UserBalance[]>([]);
  const [totalValue, setTotalValue] = useState<UserBalance>();
  const [activeTab, setActiveTab] = useState("tab1");
  const [isTransferModal, setIsTransferModal] = useState<boolean>(false);
  const [isWithdrawModal, setIsWithdrawModal] = useState<boolean>(false);
  const { setItem } = useStorage();
  //   const { usdRate, bnbRate } = useConverter();
  //   const { dexaCreator, CreatorABI } = useDexa();
  //   const { user } = useAuth();
  //   const { data } = useReadContract({
  //     abi: CreatorABI,
  //     address: dexaCreator,
  //     functionName: "getTokenBalances",
  //     args: [`${user?.wallet}`],
  //   });

  const onTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  //   useEffect(() => {
  //     const init = async () => {
  //       if (!data) return;
  //       const userBal = (data as UserBalance[]).map((balance: UserBalance) => {
  //         const token = Tokens.find(
  //           (t) =>
  //             walletToLowercase(t.address) ===
  //             walletToLowercase(balance.tokenAddress)
  //         );
  //         const amt =
  //           Number(balance.balance) > 0 ? weiToUnit(balance.balance) : "0";
  //         const usdEqv =
  //           Object.keys(usdRate).length > 0
  //             ? usdRate[`${token?.id}`] * Number(amt)
  //             : undefined;
  //         return { ...balance, usdValue: usdEqv, ...(token || {}) };
  //       });
  //       if (Object.keys(bnbRate).length > 0 && Object.keys(usdRate).length > 0) {
  //         const convertedTotal = userBal.reduce((acc, token) => {
  //           const amt = Number(token.balance) > 0 ? weiToUnit(token.balance) : 0;
  //           return acc + amt * (bnbRate[`${token.id}`] || 0);
  //         }, 0);
  //         const usdEquiv = usdRate["binancecoin"] * convertedTotal;
  //         const bnbToken = Tokens.find((t) => t.id == "binancecoin");
  //         const payload: UserBalance = {
  //           ...bnbToken,
  //           balance: `${convertedTotal}`,
  //           tokenAddress: "",
  //           usdValue: usdEquiv,
  //         };
  //         console.log(payload);
  //         setTotalValue(payload);
  //       }
  //       setBalances(userBal);
  //     };
  //     init();
  //   }, [data, usdRate, bnbRate, user?.wallet]);

  const toggleHide = () => {
    const value = !isHidden;
    setItem(StorageTypes.DEXA_HIDE_BAL, value);
    dispatch(setHideBalance(value));
  };

  return (
    <>
      <Container>
        <Section>
          <div className="flex h-full flex-col overflow-scroll scrollbar-hide">
            <div className="flex items-start pr-5 py-4 pl-2 z-50 bg-white justify-between sticky top-0">
              <Header title="Bills" isBack={true} />
              <div>
                <p>H</p>
              </div>
            </div>
            <div>
              <Button kind="primary" size="LARGE">
                <p className="flex items-center gap-x-1">
                  <PlusIcon size={18} />
                  <span>Create</span>
                </p>
              </Button>
              <div className="px-5">
                <div className="grid grid-cols-3 w-full pb-3 mt-5">
                  <InfoCard
                    title={"Loan balance"}
                    amount="2.1"
                    Icon={WalletMinimalIcon}
                    className="border md:bg-quick-view md:bg-contain text-white"
                    iconBg="bg-white"
                    textColor="text-white"
                  />
                  <InfoCard
                    title={"Locked amount"}
                    amount="2.1"
                    Icon={LockIcon}
                    className="border-y"
                  />
                  <InfoCard
                    title={"Loan balance"}
                    amount="4.91"
                    Icon={BackpackIcon}
                    className="border"
                  />
                </div>
                {/* <p className="text-sm">Total Balance</p>
                <div className="flex items-end">
                  {totalValue?.balance ? (
                    <div className="flex items-end">
                      {isHidden ? (
                        <p className="font-semibold text-2xl -mb-1">*******</p>
                      ) : (
                        <p className="font-semibold text-2xl -mb-1">
                          {Number(totalValue.balance) > 0
                            ? formatCur(totalValue?.balance)
                            : "0.00"}
                        </p>
                      )}

                      <p className="text-xs text-medium pl-1 font-semibold">
                        BNB
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-end">
                      {isHidden ? (
                        <p className="font-semibold text-2xl -mb-1">*******</p>
                      ) : (
                        <p className="font-semibold text-2xl -mb-1">0.00</p>
                      )}

                      <p className="text-xs text-medium pl-1 font-semibold">
                        BNB
                      </p>
                    </div>
                  )}

                  {Number(totalValue?.balance) > 0 ? (
                    totalValue?.usdValue && (
                      <div className="flex items-end">
                        {isHidden ? (
                          <p className="text-xs text-medium pl-2 font-semibold">
                            ******
                          </p>
                        ) : (
                          <p className="text-xs text-medium pl-2 font-semibold">
                            = {formatCur(totalValue?.usdValue)} USD
                          </p>
                        )}
                      </div>
                    )
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex items-center gap-x-5 pt-5">
                  <Button type="button" kind="primary" shape="NORMAL">
                    Deposit
                  </Button>
                  <Button
                    type="button"
                    kind="clear"
                    shape="NORMAL"
                    className="bg-light hover:bg-medium/20"
                    onClick={() => setIsTransferModal(true)}
                  >
                    Transfer
                  </Button>
                  <Button
                    type="button"
                    kind="clear"
                    shape="NORMAL"
                    className="bg-light hover:bg-medium/20"
                    onClick={() => setIsWithdrawModal(true)}
                  >
                    Withdraw
                  </Button>
                </div> */}
                <div className="flex items-center gap-x-5 pt-5 max-w-xl">
                  <WalletSearch />
                  <div className="flex items-center gap-x-2">
                    <Radio
                      type="checkbox"
                      checked={isHidden}
                      onChange={toggleHide}
                    />
                    <p className="text-sm">Hide balance</p>
                  </div>
                </div>
                <div className="pt-5 pb-20">
                  <TabsRoot>
                    <TabsList className="">
                      <TabsHeader
                        isActiveText={true}
                        title="Active Bills"
                        value="tab1"
                        activeTabId={activeTab}
                        onTabChange={onTabChange}
                        isCenter={false}
                        //isActiveBg={true}
                      />
                      <TabsHeader
                        isActiveText={true}
                        title="Completed"
                        value="tab2"
                        activeTabId={activeTab}
                        onTabChange={onTabChange}
                        isCenter={false}
                        //isActiveBg={true}
                      />
                    </TabsList>
                    <TabsContent value="tab1" activeTabId={activeTab}>
                      <div className="flex-1 mt-1">
                        <ActiveBillsTab />
                      </div>
                    </TabsContent>
                    <TabsContent value="tab2" activeTabId={activeTab}>
                      <div className="flex-1 mt-1">
                        {/* <ListTransactions /> */}
                      </div>
                    </TabsContent>
                  </TabsRoot>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Aside>
          <QuickAction showQuickPayBtn={true} />
        </Aside>
      </Container>

      <TransferModal setIsOpen={setIsTransferModal} isOpen={isTransferModal} />
      <WithdrawModal setIsOpen={setIsWithdrawModal} isOpen={isWithdrawModal} />
    </>
  );
}

export default Bills;
