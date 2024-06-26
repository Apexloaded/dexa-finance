import { TokenIconProps } from "@/components/Icons/TokenIcons";

export const txType = {
  "0": "Deposit",
  "1": "Withdraw",
  "2": "Transfer",
};

export enum TxType {
  Deposit = "0",
  Withdraw = "1",
  Transfer = "2",
}

export interface ITransaction {
  txId: number;
  txType: TxType;
  txFrom: string;
  txTo: string;
  txAmount: string;
  txFee: string;
  txDate: string;
  tokenAddress: string;
  coin: Token;
}

export interface Token {
  id: string;
  symbol: string;
  icon: ({ width, height }: TokenIconProps) => React.JSX.Element;
  address: string;
  name: string;
}
