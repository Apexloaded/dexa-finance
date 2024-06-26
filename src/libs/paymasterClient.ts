import { ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { paymasterActionsEip7677 } from "permissionless/experimental";
import { createClient, http, createPublicClient } from "viem";
import { baseSepolia } from "viem/chains";

const paymasterService =
  process.env.NEXT_PRIVATE_PAYMASTER_URL ??
  "https://api.developer.coinbase.com/rpc/v1/base-sepolia/yOAMJm9EA18_ejH6PDlvaGdoGC2YlT4B";

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

export const paymasterClient = createClient({
  chain: baseSepolia,
  transport: http(paymasterService),
}).extend(paymasterActionsEip7677(ENTRYPOINT_ADDRESS_V06));
