"use client";

import React, { useEffect, useState } from "react";
import { useAccount, useAccountEffect, useConnect } from "wagmi";
import Image from "next/image";
import { favicon } from "@/components/Icons/Connector";
import SignInModal from "@/components/Auth/Login/Signature";
import ListConnectors from "@/components/Auth/ListConnectors";
import CreateSmartWallet from "@/components/Auth/CreateSmartWallet";
import { useAppSelector } from "@/hooks/redux.hook";
import {
  selectConnector,
  selectIsConnected,
} from "@/slices/account/auth.slice";
import Link from "next/link";
import { routes } from "@/libs/routes";

export default function Login() {
  const [signModal, setSignModal] = useState<boolean>(false);
  const { isConnected } = useAppSelector(selectConnector);

  useEffect(() => {
    setSignModal(isConnected);
  }, [isConnected]);

  return (
    <div className="px-5 bg-primary/5 h-svh">
      {isConnected && signModal && <SignInModal setModal={setSignModal} />}
      <div className="max-w-lg mx-auto">
        <Link href="/" className="flex justify-center pt-10">
          <Image
            src={favicon.main}
            width={260}
            height={260}
            alt={`dexa`}
            className="h-14 w-14"
          />
        </Link>
        <div className="text-center py-4 mb-5">
          <p className="text-2xl font-semibold">Connect your wallet</p>
          <p className="text-medium">
            Seamlessly login to your account using your favourite wallet
          </p>
        </div>

        <div className="flex flex-col border border-primary/50 rounded-lg overflow-hidden">
          <ListConnectors setSignModal={setSignModal} />
        </div>

        <CreateSmartWallet />

        <div className="flex flex-row py-5 gap-x-2 justify-center items-center">
          <Link
            href={routes.register}
            className="text-medium text-sm gap-x-1 flex items-center justify-center"
          >
            <p>Don&apos;t have a Dexa account?</p>
            <span className="text-primary font-bold">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
