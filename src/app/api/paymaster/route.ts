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
import { fetchTxCount } from "@/actions/transaction.action";

export async function POST(r: Request) {
  const req = await r.json();
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

  const response = await fetchTxCount();
  console.log(response);
  if (response.status != true || response.data == 0) {
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
