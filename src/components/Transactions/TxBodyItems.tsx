"use client";

import React from "react";
import { useAuth } from "@/context/auth.context";
import {
  ITransaction,
  TxType,
  txType,
} from "@/interfaces/transaction.interface";
import { weiToUnit } from "@/libs/helpers";
import Moment from "react-moment";
import TxAddr from "./TxAddr";
import { MoveDownLeftIcon, MoveUpRightIcon } from "lucide-react";

type Props = {
  tx: ITransaction;
  isAddrFull?: boolean;
};

function TxBodyItems({ tx, isAddrFull = false }: Props) {
  const { user } = useAuth();
  const isWithdraw = tx.txType == TxType.Withdraw && tx.txFrom == user?.wallet;
  const isDeposit =
    (tx.txType == TxType.Deposit && tx.txFrom == user?.wallet) ||
    (tx.txType == TxType.Deposit && tx.txTo == user?.wallet);
  const isTransfer = tx.txType == TxType.Transfer && tx.txFrom == user?.wallet;
  const isDirectWithdraw =
    tx.txType == TxType.Withdraw && tx.txTo == user?.wallet;
  return (
    <>
      <tr className="h-14 border-b border-light last-of-type:border-none">
        <td className="px-4">
          <p className="text-sm text-center">{<tx.coin.icon />}</p>
        </td>
        <td className="px-4">
          <p
            className={`${
              isDeposit
                ? "bg-primary/40"
                : isWithdraw
                ? "bg-danger/40"
                : isTransfer
                ? "bg-danger/40"
                : isDirectWithdraw
                ? "bg-warning/40"
                : "bg-primary/40"
            } text-xs inline pl-5 py-1 pr-2 rounded-md text-nowrap relative`}
          >
            {isDeposit ? (
              <MoveDownLeftIcon
                size={12}
                className="absolute top-[0.4rem] text-primary left-1"
              />
            ) : isWithdraw ? (
              <MoveUpRightIcon
                size={12}
                className="absolute top-[0.4rem] text-danger left-1"
              />
            ) : isTransfer ? (
              <MoveUpRightIcon
                size={12}
                className="absolute top-[0.4rem] text-danger left-1"
              />
            ) : isDirectWithdraw ? (
              <MoveUpRightIcon
                size={12}
                className="absolute top-[0.4rem] text-warning left-1"
              />
            ) : (
              <MoveDownLeftIcon
                size={12}
                className="absolute top-[0.4rem] text-primary left-1"
              />
            )}
            {txType[tx.txType]}
          </p>
        </td>
        <td className="px-4">
          <TxAddr isfull={isAddrFull} wallet={tx.txFrom} />
        </td>
        <td className="px-4">
          <TxAddr isfull={isAddrFull} wallet={tx.txTo} />
        </td>
        <td className="px-4">
          <p className="text-sm text-nowrap">
            {Number(tx.txAmount) > 0 ? weiToUnit(tx.txAmount) : "0.00"}{" "}
            {tx.coin.symbol}
          </p>
        </td>
        <td className="px-4">
          <p className="text-sm text-medium">
            {Number(tx.txFee) > 0 ? weiToUnit(tx.txFee) : "0"}
          </p>
        </td>
        <td className="px-4">
          <p className="text-sm flex text-nowrap">
            <Moment fromNow className="">
              {tx.txDate}
            </Moment>
          </p>
        </td>
      </tr>
    </>
  );
}

export default TxBodyItems;
