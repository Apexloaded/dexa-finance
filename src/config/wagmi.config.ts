import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { metaMask, walletConnect } from "wagmi/connectors";
import { PROJECT_ID, RPC_URL_MAINNET, RPC_URL_TESTNET } from "./constants";

export function createWagmiConfig() {
  const bscUrl = RPC_URL_MAINNET;
  const bscTestnetUrl = RPC_URL_TESTNET;

  return createConfig({
    chains: [bsc, bscTestnet],
    ssr: true,
    connectors: [
      metaMask({
        dappMetadata: {
          url: "https://dexafi.xyz",
          name: "Dexa Finance",
          iconUrl: "",
        },
        // checkInstallationImmediately: false,
        // forceInjectProvider: false,
        // extensionOnly: false
      }),
      walletConnect({
        projectId: PROJECT_ID,
      }),
    ],
    transports: {
      [bscTestnet.id]: http(bscTestnetUrl),
      [bsc.id]: http(bscUrl),
    },
    multiInjectedProviderDiscovery: false,
  });
}
