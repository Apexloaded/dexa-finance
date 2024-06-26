"use client";

import React from "react";
import Image from "next/image";
import { favicon } from "@/components/Icons/Connector";
import { ClaimPayProvider } from "@/context/claim-pay.context";

export default function Claim() {
  return (
    <div className="px-5 bg-primary/5 h-svh">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-center pt-10">
          <Image
            src={favicon.main}
            width={260}
            height={260}
            alt={`dexa`}
            className="h-14 w-14"
          />
        </div>
        <ClaimPayProvider />
      </div>
    </div>
  );
}
