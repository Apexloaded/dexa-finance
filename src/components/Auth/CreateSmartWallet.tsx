import React, { useCallback } from "react";
import Button from "../Form/Button";
import Image from "next/image";
import { useConnect } from "wagmi";
import { connectorIcons } from "../Icons/Connector";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectConnector } from "@/slices/account/auth.slice";
import useToast from "@/hooks/toast.hook";

function CreateSmartWallet() {
  const { isConnected } = useAppSelector(selectConnector);
  const { connectors, connect, data } = useConnect();
  const { error } = useToast();

  const createWallet = useCallback(() => {
    const coinbaseWalletConnector = connectors.find(
      (connector) => connector.id === "coinbaseWalletSDK"
    );
    if (isConnected) {
      error({ msg: "You are already connected to a wallet" });
      return;
    }
    if (coinbaseWalletConnector && !isConnected) {
      connect({ connector: coinbaseWalletConnector });
    }
  }, [connectors, connect, isConnected]);

  return (
    <div>
      <div className="flex flex-row py-5 gap-x-2 justify-center items-center">
        <div className="h-[0.08rem] w-20 bg-medium"></div>
        <div className="text-medium text-sm flex items-center justify-center">
          <p>Don&apos;t have a wallet?</p>
        </div>
        <div className="h-[0.08rem] w-20 bg-medium"></div>
      </div>
      <div className="flex justify-center">
        <Button
          kind="primary"
          onClick={createWallet}
          type="button"
          className="py-[0.6rem] flex items-center gap-x-2"
        >
          <Image
            src={connectorIcons[connectors[0].id].icon}
            alt={connectorIcons[connectors[0].id].key}
            height={25}
            width={25}
          />
          <p className="text-sm">Create Smart Wallet</p>
        </Button>
      </div>
    </div>
  );
}

export default CreateSmartWallet;
