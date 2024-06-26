"use client";

import React from "react";
import { formatCur, weiToUnit } from "@/libs/helpers";
import { UserBalance } from "@/interfaces/user.interface";
import EmptyBox from "../ui/EmptyBox";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectHideBalance } from "@/slices/account/hide-balance.slice";
import { IPaymentRequest } from "@/interfaces/pay-request.interface";
import PaymentsTableBody from "./PaymentsTableBody";

type Props = {
  requests: IPaymentRequest[];
  title: string;
  message: string;
};

function PaymentsTable({ requests, title, message }: Props) {
  const isHidden = useAppSelector(selectHideBalance);

  return (
    <div className="flex-1 max-w-full border border-light overflow-auto">
      <table className="table-auto w-full">
        <thead className="border-b border-light px-4">
          <tr className="h-14 text-left font-bold">
            <th className="px-4 text-medium text-sm w-14 text-center"></th>
            <th className="px-4 text-medium text-sm w-32">Status</th>
            <th className="px-4 text-medium text-sm">From</th>
            <th className="px-4 text-medium text-sm">To</th>
            <th className="px-4 text-medium text-sm w-24">Amount</th>
            <th className="px-4 text-medium text-sm w-20">Fee</th>
            <th className="px-4 text-medium text-sm w-32">Age</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            <>
              {requests.map((req, index) => (
                <PaymentsTableBody key={index} req={req} />
              ))}
            </>
          ) : (
            <tr>
              <td colSpan={7} className="pb-20">
                <EmptyBox title={title} message={message} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentsTable;
