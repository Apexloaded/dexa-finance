"use server";

import { getChainById } from "@/config/chains.config";
import { RECAPTCHA_SECRET } from "@/config/constants";
import dbConnect from "@/db/db.config";
import Auth, { IAuth } from "@/db/models/auth.model";
import {
  AsyncFunction,
  IActionResponse,
} from "@/interfaces/response.interface";
import { Sessions } from "@/libs/enums";
import { walletToLowercase } from "@/libs/helpers";
import { getRpcProviderForChain } from "@/libs/provider";
import { decryptSession, encryptSession } from "@/libs/session";
import { isAddress } from "ethers";
import { cookies } from "next/headers";
import { SiweMessage, generateNonce } from "siwe";
import { Chain, Hex } from "viem";
import { postApi } from "./api.action";
import { revalidatePath } from "next/cache";
import { RedirectType, redirect } from "next/navigation";

type IVerifyNonce = {
  wallet: `0x${string}`;
  message: string;
  signature: Hex;
  chainId: string;
};

export async function registerUser(wallet: string): Promise<IActionResponse> {
  await dbConnect();
  const isEthAddr = isAddress(wallet);
  if (!isEthAddr) {
    return { status: false, message: `Invalid wallet address` };
  }

  const auth = await Auth.findOne<IAuth>({
    wallet: walletToLowercase(wallet),
  });
  if (auth) {
    return { status: false, message: `Already registered` };
  }

  const nonce = generateNonce();
  const newUserAuth = {
    wallet: walletToLowercase(wallet),
    nonce: nonce,
  };
  await Auth.create(newUserAuth);
  return { status: true, message: "success" };
}

export async function verifyCaptcha(token: string): Promise<IActionResponse> {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
    }
  );
  const data = await response.json();
  if (data.success == true) {
    return { status: true, message: "success" };
  } else {
    return { status: false, message: `Unauthorized` };
  }
}

export async function getNonce(
  wallet: `0x${string}`
): Promise<IActionResponse> {
  await dbConnect();
  const isEthAddr = isAddress(wallet);
  if (!isEthAddr) {
    return { status: false, message: `Invalid wallet address` };
  }

  const auth = await Auth.findOne<IAuth>({ wallet: walletToLowercase(wallet) });
  if (!auth) {
    return { status: false, message: `Account is not registered.` };
  }
  return { status: true, message: "success", data: { nonce: auth.nonce } };
}

export async function verifyNonce({
  signature,
  message,
  wallet,
  chainId,
}: IVerifyNonce): Promise<IActionResponse> {
  await dbConnect();
  const siwe = new SiweMessage(message);
  const userWallet = walletToLowercase(wallet);
  const [userAuth] = await Promise.all([
    Auth.findOne<IAuth>({ wallet: userWallet }),
  ]);
  if (!userAuth || userAuth.wallet == undefined) {
    return { status: false, message: `Unauthorized access` };
  }

  if (siwe.nonce !== userAuth.nonce) {
    return { status: false, message: `Incorrect nonce` };
  }

  const chain = getChainById(chainId);
  const provider = getRpcProviderForChain(chain as Chain);
  const isValid = await provider.verifySiweMessage({
    address: wallet,
    message: message,
    signature,
  });

  if (!isValid) {
    return { status: false, message: `Invalid signature` };
  }

  const session = await encryptSession({ ...siwe });
  cookies().set(Sessions.ACCESS_TOKEN, session, {
    httpOnly: false,
    path: "/",
    sameSite: "strict",
    secure: false,
    maxAge: 6 * 24 * 60 * 60,
  });

  const nonce = generateNonce();
  await Auth.updateOne({ wallet: userWallet }, { nonce });
  return { status: true };
}

export async function verifyNonceAuth({
  signature,
  message,
  wallet,
  chainId,
}: IVerifyNonce): Promise<IActionResponse> {
  try {
    const payload = {
      message,
      signature,
      wallet,
    };

    const response = await postApi("auth/nonce/verify", payload);
    const data = response.data;
    if (data.status == true && data.statusCode == 201) {
      const session = data.data.token;
      cookies().set(Sessions.ACCESS_TOKEN, session, {
        httpOnly: false,
        path: "/",
        sameSite: "strict",
        secure: false,
        maxAge: 6 * 24 * 60 * 60,
      });
      return { status: true };
    }
    return { status: false };
  } catch (error) {
    return { status: false };
  }
}

export async function validateUser() {
  const session = cookies().get(Sessions.ACCESS_TOKEN);
  if (!session) {
    return { status: false, message: `Unauthorized access` };
  }

  const payload = await decryptSession(session.value);
  return { status: true, message: "success", data: payload };
}

export async function initLogout() {
  cookies().delete(Sessions.ACCESS_TOKEN);
  redirect("/login", RedirectType.replace);
}
