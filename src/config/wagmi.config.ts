import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { coinbaseWallet, walletConnect } from "wagmi/connectors";
import { BASE_RPC_URL } from "./constants";

//export const wagmiConfig = createWagmiConfig(BASE_RPC_URL);
export function createWagmiConfig(rpcUrl: string, projectId?: string) {
  const baseUrl = rpcUrl.replace(/\/v1\/(.+?)\//, "/v1/base/");
  const baseSepoliaUrl = rpcUrl.replace(/\/v1\/(.+?)\//, "/v1/base-sepolia/");

  // https://api.developer.coinbase.com/rpc/v1/base-sepolia/yOAMJm9EA18_ejH6PDlvaGdoGC2YlT4B

  return createConfig({
    chains: [baseSepolia],
    ssr: true,
    //storage: createStorage({ storage: cookieStorage }),
    connectors: [
      coinbaseWallet({
        appName: "Dexa Pay",
        preference: "smartWalletOnly",
      }),
    ],
    transports: {
      [baseSepolia.id]: http(baseSepoliaUrl),
      [base.id]: http(baseUrl),
    },
    multiInjectedProviderDiscovery: true,
  });
}
