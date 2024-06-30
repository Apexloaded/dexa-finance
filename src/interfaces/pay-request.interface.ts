import { RequestStatus, RequestType } from "@/libs/enums";
import { Token } from "./transaction.interface";
import { timestampToDate, weiToUnit } from "@/libs/helpers";

export interface ISendPayRequest {
  paymentId: string;
  recipient_email: string;
  amount: number;
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  from: string;
  senderName: string;
  isClaimed: boolean;
}

export interface IPaymentRequest {
  amount: string;
  createdAt: string;
  email: string;
  fee: number;
  isRequesting: boolean;
  paymentCode: string;
  recipient: string;
  remark: string;
  requestType: RequestType;
  sender: string;
  status: RequestStatus;
  token: string;
  tokenData?: Token;
  usdAmount: number;
}

export interface RequestPaymentEvent extends Partial<IPaymentRequest> {}
export interface SendPaymentEvent extends Partial<IPaymentRequest> {}
export interface FulfilledPaymentEvent extends Partial<IPaymentRequest> {}

export const sortRequestByDate = (req: IPaymentRequest[]) => {
  return req
    .sort((a, b) => {
      const dateA = timestampToDate(a.createdAt).getTime();
      const dateB = timestampToDate(b.createdAt).getTime();
      return dateB - dateA;
    })
    .map((p: IPaymentRequest) => mapReq(p));
};

export const mapReq = (request: IPaymentRequest) => {
  const { createdAt, amount, fee, ...payload } = request;
  return {
    createdAt: timestampToDate(request.createdAt).toISOString(),
    amount: weiToUnit(request.amount).toString(),
    fee: weiToUnit(request.fee),
    ...payload,
  } as IPaymentRequest;
};
