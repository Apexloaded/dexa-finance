import { BNB, USDT, ETH, LINK } from "@/components/Icons/TokenIcons";
import { Token } from "@/interfaces/transaction.interface";
import { ZeroAddress } from "ethers";
// 0xBf3edC332bd9E1C32D10d2511B61938D1A6b4D01
export const Tokens: Token[] = [
  {
    id: "ethereum",
    address: "0x831F95093c67eD6D83112Ae5F78CDc649056380A",
    symbol: "ETH",
    name: "Ethereum",
    icon: ETH,
  },
  {
    id: "binancecoin",
    address: ZeroAddress,
    symbol: "BNB",
    name: "Binance Coin",
    icon: BNB,
  },
  {
    id: "binancecoin",
    address: "0x39a325F4699a651fdcef4AA263F84c596cFe479d",
    symbol: "TBNB",
    name: "Test Binance Coin",
    icon: BNB,
  },
  {
    id: "chainlink",
    address: "0x11480C88d381A4C8adB29d84BFF032Ea3050d25A",
    symbol: "LINK",
    name: "Chainlink",
    icon: LINK,
  },
  {
    id: "tether",
    address: "0xaD85526A63168c2d25f26CFe15Ebbe6D82086cC6",
    symbol: "USDT", // USDT
    name: "Tether",
    icon: USDT,
  },
];
