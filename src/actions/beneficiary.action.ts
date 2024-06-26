"use server";

import dbConnect from "@/db/db.config";
import Beneficiary, { IBeneficiary } from "@/db/models/beneficiary.model";
import { IActionResponse } from "@/interfaces/response.interface";
import { pickFromArray, walletToLowercase } from "@/libs/helpers";
import { isAddress } from "ethers";

export async function addBeneficiary(
  payload: IBeneficiary
): Promise<IActionResponse> {
  try {
    await dbConnect();
    const { wallet, user, name } = payload;
    const isEthAddr = isAddress(wallet) && isAddress(user);
    if (!isEthAddr) {
      return { status: false, message: `Invalid wallet address` };
    }

    if (name.length < 3) {
    }
    const isBeneficiary = await Beneficiary.findOne<IBeneficiary>({
      user: walletToLowercase(user),
      wallet: walletToLowercase(wallet),
    });
    if (isBeneficiary) {
      return { status: false, message: `Beneficiary already exists` };
    }

    const newBeneficiary = {
      user: walletToLowercase(user),
      wallet: walletToLowercase(wallet),
      name,
    };

    await Beneficiary.create(newBeneficiary);
    return { status: true, message: "success" };
  } catch (error: any) {
    return {
      status: false,
      message: error.message || "Error adding beneficiary",
    };
  }
}

export async function listBeneficiary(user: string): Promise<IActionResponse> {
  await dbConnect();
  const isEthAddr = isAddress(user);
  if (!isEthAddr) {
    return { status: false, message: `Invalid wallet address` };
  }

  const doc = await Beneficiary.find<IBeneficiary>({
    user: walletToLowercase(user),
  })
    .sort({ createdAt: -1 })
    .select("name wallet user _id")
    .lean();
  const serializedDoc = doc.map((data: any) => {
    return {
      ...data,
      id: data._id.toString(),
    };
  });
  const beneficiaries = pickFromArray(serializedDoc, [
    "name",
    "wallet",
    "user",
    "id",
  ]);
  return { status: true, message: "success", data: beneficiaries };
}
