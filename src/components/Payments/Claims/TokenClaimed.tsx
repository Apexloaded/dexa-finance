"use client";

import React from "react";
import Button from "@/components/Form/Button";
import { useClaimPay } from "@/context/claim-pay.context";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectConnector } from "@/slices/account/auth.slice";
import { BadgeDollarSign } from "lucide-react";
import { useRouter } from "next/navigation";
import { formatWalletAddress } from "@/libs/helpers";

export function TokenClaimed() {
  const router = useRouter();
  const { wallet } = useAppSelector(selectConnector);
  const { payment } = useClaimPay();
  
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="mb-5">
        <div className="flex items-center gap-x-1">
          <BadgeDollarSign
            size={20}
            className="text-white rounded-full bg-primary"
          />
          <p className="text-xl font-bold text-dark">Token Clamied</p>
        </div>

        <p className="text-medium text-sm font-light">
          {payment?.amount} {payment?.tokenSymbol} succesfully claimed to your
          wallet.
        </p>
      </div>

      <div>
        <div className="bg-primary/20 rounded-lg px-5 py-3 mt-5">
          <p className="text-primary">
            Token claimed succesfully to your wallet address on Dexa. Login on
            register to view your balance
          </p>
        </div>
        <p className="font-bold text-medium mt-2">
          Address:{" "}
          <span className="text-dark">
            {formatWalletAddress(`${wallet}`, "...", 10, 10)}
          </span>
        </p>
        <p className="font-bold text-medium">
          Amount:{" "}
          <span className="text-dark">
            {payment?.amount} {payment?.tokenSymbol}
          </span>
        </p>
        <div className="flex items-center mt-5 gap-x-5">
          <Button
            onClick={() => router.replace("/register")}
            type="button"
            kind="primary"
            className="flex-1 border border-primary"
          >
            Register
          </Button>
          <Button
            onClick={() => router.replace("/login")}
            type="button"
            kind="default"
            hoverColor={false}
            className="flex-1 text-primary border border-primary hover:bg-primary/5"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
