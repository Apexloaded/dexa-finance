"use client";

import { createContext, useContext, useState } from "react";
import DexaPay from "@/contracts/DexaPay";
import DexaBills from "@/contracts/DexaBills";
import ERC20Token from "@/contracts/ERC20ABI";
import { toOxString } from "@/libs/helpers";
import { Abi } from "viem";
import { DEXA_BILLS, DEXA_PAY } from "@/config/constants";

const DEXAPAY = toOxString(DEXA_PAY);
const DEXABILLS = toOxString(DEXA_BILLS);

export type DexaContextType = {
  DexaPayAbi: Abi;
  DexaBillsAbi: Abi;
  ERC20ABI: Abi;
  dexaPayAddr: `0x${string}`;
  dexaBillsAddr: `0x${string}`;
};

interface Props {
  children: React.ReactNode;
}

export const DexaContext = createContext<DexaContextType | undefined>(
  undefined
);

export function DexaProvider({ children }: Props) {
  const [DexaPayAbi] = useState(DexaPay);
  const [DexaBillsAbi] = useState(DexaBills);
  const [ERC20ABI] = useState(ERC20Token);

  const [dexaPayAddr] = useState<`0x${string}`>(DEXAPAY);
  const [dexaBillsAddr] = useState<`0x${string}`>(DEXABILLS);

  return (
    <DexaContext.Provider
      value={{
        DexaPayAbi,
        DexaBillsAbi,
        dexaPayAddr,
        dexaBillsAddr,
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
