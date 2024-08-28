import { bscTestnet } from "viem/chains";

export const EXPECTED_CHAIN = bscTestnet;
export const RPC_URL_TESTNET = process.env.NEXT_PUBLIC_RPC_TESTNET_URL;
export const RPC_URL_MAINNET = process.env.NEXT_PUBLIC_RPC_MAINNET_URL;
export const DEXA_PAY = process.env.NEXT_PUBLIC_DEXA_PAY || "";
export const DEXA_BILL = process.env.NEXT_PUBLIC_DEXA_BILL || "";
export const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME || "https://www.dexafi.xyz";
export const PROJECT_ID = process.env.WALLET_CONNECT_ID || "";
export const PAYMASTER_URL = process.env.NEXT_PUBLIC_PAYMASTER_URL;
export const RECAPTCHA_SECRET =
  process.env.NEXT_PRIVATE_RECAPTCHA_SECRET_KEY || "";
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const API = process.env.NEXT_PUBLIC_API_URL;

export const coinbaseSmartWalletProxyBytecode =
  "0x363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f3";
export const coinbaseSmartWalletV1Implementation =
  "0x000100abaad02f1cfC8Bbe32bD5a564817339E72";
export const coinbaseSmartWalletFactoryAddress =
  "0x0BA5ED0c6AA8c49038F819E587E2633c4A9F428a";
export const magicSpendAddress = "0x011A61C07DbF256A68256B1cB51A5e246730aB92";
export const erc1967ProxyImplementationSlot =
  "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";
