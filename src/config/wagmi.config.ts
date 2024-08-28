import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { RPC_URL_MAINNET, RPC_URL_TESTNET } from "./constants";

export function createWagmiConfig() {
  const bscUrl = RPC_URL_MAINNET;
  const bscTestnetUrl = RPC_URL_TESTNET;

  return createConfig({
    chains: [bsc, bscTestnet],
    ssr: true,
    connectors: [
      coinbaseWallet({
        appName: "Dexa Finance",
        preference: "smartWalletOnly",
      }),
    ],
    transports: {
      [bscTestnet.id]: http(bscTestnetUrl),
      [bsc.id]: http(bscUrl),
    },
    multiInjectedProviderDiscovery: true,
  });
}
