"use server";

import { IActionResponse } from "@/interfaces/response.interface";
import { getApi } from "./api.action";

export async function requestFaucet(wallet: string): Promise<IActionResponse> {
  try {
    const response = await getApi(`faucet/${wallet}`);
    const faucet = response.data;
    return {
      status: true,
      message: "success",
      data: faucet.data,
    };
  } catch (error: any) {
    return {
      status: false,
      message: error.message || "Error requesting faucet",
    };
  }
}
