import { BNB, USDT, ETH, LINK } from "@/components/Icons/TokenIcons";
import { Token } from "@/interfaces/transaction.interface";
import { ZeroAddress } from "ethers";
// 0xBf3edC332bd9E1C32D10d2511B61938D1A6b4D01
export const Tokens: Token[] = [
  {
    id: "ethereum",
    address: ZeroAddress,
    symbol: "ETH",
    name: "Ethereum",
    icon: ETH,
  },
  {
    id: "binancecoin",
    address: "0xBf3edC332bd9E1C32D10d2511B61938D1A6b4D01",
    symbol: "BNB",
    name: "Binance Coin",
    icon: BNB,
  },
  // {
  //   id: "chainlink",
  //   address: ZeroAddress,
  //   symbol: "LINK",
  //   name: "Chainlink",
  //   icon: LINK,
  // },
  {
    id: "tether",
    address: "0xE8a8f500301c778064E380E5bFA9E315a7638134",
    symbol: "USDT", // USDT
    name: "Tether",
    icon: USDT,
  },
];
