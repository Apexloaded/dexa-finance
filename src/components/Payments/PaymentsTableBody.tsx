"use client";

import React from "react";
import { useAuth } from "@/context/auth.context";
import { weiToUnit } from "@/libs/helpers";
import Moment from "react-moment";
import { MoveDownLeftIcon, MoveUpRightIcon } from "lucide-react";
import { IPaymentRequest } from "@/interfaces/pay-request.interface";
import { RequestStatus } from "@/libs/enums";
import TxAddr from "../Transactions/TxAddr";

type Props = {
  req: IPaymentRequest;
};

function PaymentsTableBody({ req }: Props) {
  const { user } = useAuth();
  const isPending = req.status == RequestStatus.Pending;
  const isConfirmed = req.status == RequestStatus.Fulfilled;
  const isRejected = req.status == RequestStatus.Rejected;
  //   const isIncoming = req.recipient == user?.wallet && req.isRequesting == true;
  //   const isPaid =
  //     req.isRequesting == true &&
  //     req.recipient == user?.wallet &&
  //     req.status == RequestStatus.Fulfilled;

  const statusText =
    req.status == RequestStatus.Fulfilled
      ? "Confirmed"
      : req.status == RequestStatus.Rejected
      ? "Rejected"
      : "Pending";
  return (
    <>
      <tr className="h-14 border-b border-light last-of-type:border-none">
        <td className="px-4">
          <p className="text-sm text-center">
            {req.tokenData && <req.tokenData.icon />}
          </p>
        </td>
        <td className="px-4">
          <p
            className={`${
              isConfirmed
                ? "bg-success/40 text-success"
                : isPending
                ? "bg-warning/40 text-warning"
                : "bg-danger/40 text-danger"
            } text-xs inline py-1 px-2 rounded-md text-nowrap relative`}
          >
            {statusText}
          </p>
        </td>
        <td className="px-4">
          <TxAddr wallet={req.sender} />
        </td>
        <td className="px-4">
          <TxAddr wallet={req.recipient} />
        </td>
        <td className="px-4">
          <p className="text-sm text-nowrap">
            {Number(req.amount) > 0 ? req.amount : "0.00"}{" "}
            {req.tokenData?.symbol}
          </p>
        </td>
        <td className="px-4">
          <p className="text-sm text-medium">
            {Number(req.fee) > 0 ? req.fee : "0"}
          </p>
        </td>
        <td className="px-4">
          <p className="text-sm flex text-nowrap">
            <Moment fromNow className="">
              {req.createdAt}
            </Moment>
          </p>
        </td>
      </tr>
    </>
  );
}

export default PaymentsTableBody;
