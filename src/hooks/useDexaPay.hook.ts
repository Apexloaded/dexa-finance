import { baseSepolia } from "viem/chains";
import { generateContractHook } from "@/hooks/contracts";
import DexaPayAbi from "@/contracts/DexaPay";
import { DEXA_PAY } from "@/config/constants";
import { toOxString } from "@/libs/helpers";

/**
 * Returns contract data for the BuyMeACoffee contract.
 */
export const useDexaPayContract = generateContractHook({
  abi: DexaPayAbi,
  [baseSepolia.id]: {
    chain: baseSepolia,
    address: toOxString(DEXA_PAY),
  },
});
