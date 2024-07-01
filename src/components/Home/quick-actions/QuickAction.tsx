import React, { SetStateAction, Suspense } from "react";
import QuickSearch from "./QuickSearch";
import BalanceCard from "./BalanceCard";
import QuickSend from "./QuickSend";
import RequestPay from "./RequestPay";
import WithdrawModal from "@/components/Wallet/WithdrawModal";
import DepositModal from "@/components/Wallet/DepositModal";

type Props = {
  showQuickPayBtn?: boolean;
};
function QuickAction({ showQuickPayBtn }: Props) {
  return (
    <>
      <div className="p-5 flex h-full flex-col justify-between">
        <div className="flex flex-col gap-7">
          <QuickSearch />
          <BalanceCard showBtn={showQuickPayBtn} />
          <Suspense>
            <QuickSend />
          </Suspense>
        </div>
        <RequestPay />
      </div>
      <DepositModal />
      <WithdrawModal />
    </>
  );
}

export default QuickAction;
