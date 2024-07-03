"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Button from "@/components/Form/Button";
import { formatWalletAddress, toOxString } from "@/libs/helpers";
import {
  BadgeCheckIcon,
  ShieldEllipsisIcon,
  Wallet2Icon,
  XIcon,
} from "lucide-react";
import { useSignMessage } from "wagmi";
import { SiweMessage } from "siwe";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { selectConnector, setAuth } from "@/slices/account/auth.slice";
import useToast from "@/hooks/toast.hook";
import {
  verifyNonceAuth,
  getNonce,
  verifyCaptcha,
} from "@/actions/auth.action";
import { routes } from "@/libs/routes";
import ReCaptcha from "../ReCaptcha";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function SignInModal({ setModal }: Props) {
  const router = useRouter();
  const [token, setToken] = useState<string>();
  const [valid, setValid] = useState<boolean | undefined>(undefined);
  const { wallet, chainId } = useAppSelector(selectConnector);
  const { signMessage } = useSignMessage();
  const { loading, success, error, updateLoading } = useToast();
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkValid();
  }, [token]);

  const checkValid = useCallback(async () => {
    if (!token) return;
    const isVerified = await verifyCaptcha(token);
    setValid(isVerified.status);
  }, [token]);

  const handelRecaptcha = (token: string) => {
    setToken(token);
  };

  const initSignMessage = async () => {
    try {
      if (!wallet || !chainId) return;
      loading({ msg: "Initializing..." });

      // if (!valid) {
      //   error({ msg: "Invalid reCAPTCHA" });
      //   return;
      // }

      const res = await getNonce(toOxString(wallet));
      console.log(res);
      if (!res.status) {
        error({ msg: `${res.message}` });
        return;
      }

      updateLoading({ msg: "Authenticating..." });
      const message = new SiweMessage({
        domain: window.location.host,
        address: wallet,
        statement:
          "For your security and convenience, please sign this signature with your wallet address.",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce: res.data.nonce,
      });
      signMessage(
        {
          message: message.prepareMessage(),
        },
        {
          onSuccess: async (signature) => {
            const verifyRes = await verifyNonceAuth({
              wallet: toOxString(wallet),
              signature,
              message: message.prepareMessage(),
              chainId: `${message.chainId}`,
            });
            if (verifyRes?.status) {
              setModal(false);
              dispatch(setAuth(true));
              success({ msg: "Successfully signed in!" });
              router.push(routes.app.home);
            }
            if (!verifyRes?.status) {
              error({ msg: verifyRes.message || "Something went wrong" });
            }
          },
          onError(err) {
            error({ msg: err.message || "Something went wrong" });
          },
        }
      );
    } catch (e: any) {
      console.log(e);
      error({ msg: e.code === 4001 ? "Failed to sign in!" : e.response.data });
    }
  };

  return (
    <div className="absolute inset-0 bg-dark/20">
      <div className="h-full flex items-center max-w-md mx-auto p-5">
        <div className="bg-light rounded-3xl p-5 transition-transform duration-500">
          <div className="pb-6 flex items-center justify-between">
            <Button
              type={"button"}
              kind={"default"}
              shape={"CIRCLE"}
              className="text-primary bg-primary/20"
            >
              <Wallet2Icon height={18} />
            </Button>
            <p>{formatWalletAddress(`${wallet}`)}</p>
            <Button
              type={"button"}
              kind={"default"}
              shape={"CIRCLE"}
              className="text-dark hover:text-primary hover:bg-primary/20"
              onClick={() => setModal(false)}
            >
              <XIcon height={18} />
            </Button>
          </div>
          <div className="body">
            <div className="flex items-center flex-col">
              <div className="bg-primary rounded-full h-12 flex items-center justify-center w-12">
                <ShieldEllipsisIcon size={30} className="text-light" />
              </div>
              <p className="font-semibold text-lg mt-1">Signature request</p>
            </div>
            <div className="px-6">
              <div className="mt-5 border border-medium/40 rounded-xl p-3">
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-primary font-semibold">Dexa</p>
                      <BadgeCheckIcon
                        size={18}
                        className="text-primary fill-primary stroke-light"
                      />
                    </div>
                    <p className="text-medium text-sm">https://dexapay.xyz</p>
                  </div>
                  <div className="border-t border-medium/40"></div>
                  <p className="">
                    For your security and convenience, please sign this
                    signature with your wallet address.
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-6 justify-between gap-4 mt-10">
                <Button
                  kind="default"
                  className="flex-1 h-12"
                  shape={"ROUNDED"}
                  onClick={() => setModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  kind="primary"
                  className="flex-1 h-12"
                  shape={"ROUNDED"}
                  onClick={() => initSignMessage()}
                >
                  Sign
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReCaptcha onVerify={handelRecaptcha} />
    </div>
  );
}

export default SignInModal;
