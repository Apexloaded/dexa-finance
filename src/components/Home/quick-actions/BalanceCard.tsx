"use client";

import React from "react";
import { CopyIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { formatCur, isNumber } from "@/libs/helpers";
import Button from "../../Form/Button";
import { StorageTypes } from "@/libs/enums";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import {
  selectHideBalance,
  setHideBalance,
} from "@/slices/account/hide-balance.slice";
import useStorage from "@/hooks/storage.hook";
import { useAuth } from "@/context/auth.context";

type Props = {
  showBtn?: boolean;
};
function BalanceCard({ showBtn }: Props) {
  const isHidden = useAppSelector(selectHideBalance);
  const dispatch = useAppDispatch();
  const { setItem } = useStorage();
  const { totalValue } = useAuth();

  const toggleHide = () => {
    const value = !isHidden;
    setItem(StorageTypes.DEXA_HIDE_BAL, value);
    dispatch(setHideBalance(value));
  };

  return (
    <div className="">
      <p className="font-semibold text-base">Total balance</p>
      <div className="bg-quick-view bg-contain px-5 py-3 mt-2 rounded-xl">
        <div className="text-light">
          <p className="font-light flex justify-between items-center">
            <span className="">Account balance</span>
            <span
              className="cursor-pointer p-2 translate-x-3 text-xl"
              onClick={toggleHide}
            >
              {isHidden ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </span>
          </p>
          <div className="flex justify-between items-end">
            {isHidden ? (
              <div className="mb-2">
                <p>
                  <span className="text-5xl font-semibold">******</span>
                </p>
                <p className="font-light -mt-4 text-2xl">******</p>
              </div>
            ) : (
              <div className="mb-2 w-full">
                <p className="flex items-center gap-1">
                  <span className="text-2xl font-semibold">
                    {totalValue?.balance ? (
                      <>
                        {Number(totalValue?.balance) > 0
                          ? formatCur(totalValue?.balance)
                          : "0.00"}
                      </>
                    ) : (
                      "0.00"
                    )}
                  </span>
                  {totalValue?.icon && <totalValue.icon />}
                </p>
                <div className="flex items-center justify-between w-full">
                  {totalValue?.usdValue && isNumber(totalValue?.usdValue) ? (
                    <p className="text-sm font-light">
                      ${formatCur(totalValue?.usdValue)}
                    </p>
                  ) : (
                    <p className="text-sm font-light">$0.00</p>
                  )}
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-1">
                      <p className="text-sm">Pay ID:</p>
                      <p className="text-sm">69876566</p>
                    </div>
                    <CopyIcon size={15} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {showBtn && (
          <div className="flex shrink-0 lg:flex-row flex-col gap-2 mb-2 mt-3 lg:gap-5 justify-center">
            <Button
              //onClick={() => router.push(routes.app.wallet.index)}
              kind="default"
              shape={"ROUNDED"}
              className="border w-full border-white"
            >
              <p className="text-sm xl:text-base">My Wallet</p>
            </Button>
            <Button
              //onClick={() => setIsWithdrawModal(true)}
              shape={"ROUNDED"}
              kind="primary"
              className="border w-full bg-transparent border-white"
            >
              <p className="text-sm xl:text-base">Withdraw</p>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BalanceCard;
