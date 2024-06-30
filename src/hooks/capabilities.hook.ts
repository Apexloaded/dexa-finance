import { HOSTNAME, PAYMASTER_URL } from "@/config/constants";
import isLocal from "@/libs/isLocal";
import { useMemo } from "react";
import { useCapabilities } from "wagmi/experimental";

interface Props {
  address?: `0x${string}`;
  chainId?: number;
  isSmartWallet: boolean;
}

const paymasterUrl = isLocal()
  ? PAYMASTER_URL
  : `https://${HOSTNAME}/api/paymaster`;

function useDexaCapabilities({ address, chainId, isSmartWallet }: Props) {
  const { data: availableCapabilities } = useCapabilities({
    account: address,
    query: { enabled: isSmartWallet },
  });
  const capabilities = useMemo(() => {
    if (!availableCapabilities || !chainId) return {};
    const capabilitiesForChain = availableCapabilities[chainId];
    if (
      capabilitiesForChain["paymasterService"] &&
      capabilitiesForChain["paymasterService"].supported
    ) {
      console.log(paymasterUrl);
      return {
        paymasterService: {
          url: paymasterUrl,
        },
      };
    }
    return {};
  }, [availableCapabilities]);

  return capabilities;
}

export default useDexaCapabilities;
