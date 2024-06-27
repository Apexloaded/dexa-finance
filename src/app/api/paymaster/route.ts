import { NextRequest, NextResponse } from "next/server";
import { UserOperation } from "permissionless";
import {
  isValidAAEntrypoint,
  isWalletACoinbaseSmartWallet,
} from "@coinbase/onchainkit/wallet";
import type {
  IsValidAAEntrypointOptions,
  IsWalletACoinbaseSmartWalletOptions,
} from "@coinbase/onchainkit/wallet";
import { client, paymasterClient } from "@/libs/paymasterClient";
import dbConnect from "@/db/db.config";
import { walletToLowercase } from "@/libs/helpers";
import Auth, { IAuth } from "@/db/models/auth.model";

export async function POST(r: Request) {
  await dbConnect();
  const req = await r.json();
  const method = req.method;
  const [userOp, entrypoint, chainId] = req.params;
  const userWallet = walletToLowercase(userOp.sender);

  // Verify the entrypoint address
  if (!isValidAAEntrypoint({ entrypoint } as IsValidAAEntrypointOptions)) {
    return NextResponse.json({ error: "invalid entrypoint" }, { status: 400 });
  }

  // Validate the User Operation by checking if the sender address is a proxy with the expected bytecode.
  if (
    !(await isWalletACoinbaseSmartWallet({
      client,
      userOp,
    } as IsWalletACoinbaseSmartWalletOptions))
  ) {
    return NextResponse.json({ error: "invalid wallet" }, { status: 400 });
  }

  const user = await Auth.findOne<IAuth>({ wallet: userWallet });
  if (!user) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 400 });
  }

  const remainingFreeTransactions = Math.max(0, 5 - user.txCount);
  if (remainingFreeTransactions < 1) {
    return NextResponse.json({ error: "No free transaction" }, { status: 400 });
  }

  if (method === "pm_getPaymasterStubData") {
    const result = await paymasterClient.getPaymasterStubData({
      userOperation: userOp,
    });
    return Response.json({ result });
  } else if (method === "pm_getPaymasterData") {
    const result = await paymasterClient.getPaymasterData({
      userOperation: userOp,
    });
    return Response.json({ result });
  }
  return Response.json({ error: "Method not found" });
}

export const dynamic = "force-dynamic";
