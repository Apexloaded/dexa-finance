import { RequestStatus, RequestType } from "@/libs/enums";
import { Token } from "./transaction.interface";

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
  tokenData?: Token,
  usdAmount: number;
}
