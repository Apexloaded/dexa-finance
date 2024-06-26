import { useReadContract } from "wagmi";
import { useDexaPayContract } from "../useDexaPay.hook";
import { useMemo } from "react";

function useNameAvailability(name: string) {
  const contract = useDexaPayContract();

  const result = useReadContract({
    address: contract.status === "ready" ? contract.address : undefined,
    abi: contract.abi,
    functionName: "isNameFree",
    args: [name],
  });

  return useMemo(
    () => ({
      isAvailable: result.status === "success" ? (result.data as boolean) : false,
      refetch: result.refetch,
    }),
    [result]
  );
}

export default useNameAvailability;
