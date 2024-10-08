"use client";

import useUser from "@/hooks/user.hook";
import { UserBalance, UserInterface } from "@/interfaces/user.interface";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { ReadContractErrorType } from "viem";

export type AuthContextType = {
  logout: () => void;
  user?: UserInterface;
  profileProgress?: number;
  setProfileProgress: Dispatch<SetStateAction<number | undefined>>;
  isAuth: boolean;
  findUser: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<unknown, ReadContractErrorType>>;
  balances?: UserBalance[];
  totalValue?: UserBalance;
  isSmartWallet: boolean;
};

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: Props) {
  const user = useUser();

  return (
    <AuthContext.Provider
      value={{
        ...user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
