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

export async function POST(r: Request) {
  const req = await r.json();
  console.log("pm request", req);
  const method = req.method;
  const [userOp, entrypoint, chainId] = req.params;

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

  if (method === "pm_getPaymasterStubData") {
    const result = await paymasterClient.getPaymasterStubData({
      userOperation: userOp,
    });
    console.log("result", result);
    return Response.json({ result });
  } else if (method === "pm_getPaymasterData") {
    const result = await paymasterClient.getPaymasterData({
      userOperation: userOp,
    });
    console.log("Paymaster Date", result);
    return Response.json({ result });
  }
  return Response.json({ error: "Method not found" });
}

export const dynamic = "force-dynamic";
