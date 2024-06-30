"use client";

import { createContext, useContext, useState } from "react";
import DexaPay from "@/contracts/DexaPay";
import DexaBill from "@/contracts/DexaBill";
import ERC20Token from "@/contracts/ERC20ABI";
import { toOxString } from "@/libs/helpers";
import { Abi } from "viem";
import { DEXA_BILL, DEXA_PAY } from "@/config/constants";

const DEXAPAY = toOxString(DEXA_PAY);
const DEXABILL = toOxString(DEXA_BILL);

export type DexaContextType = {
  DexaPayAbi: Abi;
  DexaBillAbi: Abi;
  ERC20ABI: Abi;
  dexaPayAddr: `0x${string}`;
  dexaBillAddr: `0x${string}`;
};

interface Props {
  children: React.ReactNode;
}

export const DexaContext = createContext<DexaContextType | undefined>(
  undefined
);

export function DexaProvider({ children }: Props) {
  const [DexaPayAbi] = useState(DexaPay);
  const [DexaBillAbi] = useState(DexaBill);
  const [ERC20ABI] = useState(ERC20Token);

  const [dexaPayAddr] = useState<`0x${string}`>(DEXAPAY);
  const [dexaBillAddr] = useState<`0x${string}`>(DEXABILL);

  return (
    <DexaContext.Provider
      value={{
        DexaPayAbi,
        DexaBillAbi,
        dexaPayAddr,
        dexaBillAddr,
        ERC20ABI,
      }}
    >
      {children}
    </DexaContext.Provider>
  );
}

export function useDexa() {
  const context = useContext(DexaContext);
  if (context === undefined) {
    throw new Error("useDexa must be used within a DexaProvider");
  }
  return context;
}
