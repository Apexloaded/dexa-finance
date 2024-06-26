"use server";

import { IActionResponse } from "@/interfaces/response.interface";
import { getApi } from "./api.action";

export async function fetchTxCount(): Promise<IActionResponse> {
  try {
    const response = await getApi(`auth/transactions/count`);
    const payment = response.data;
    return {
      status: true,
      message: "success",
      data: payment.data.count,
    };
  } catch (error: any) {
    return {
      status: false,
      message: error.message || "Error fetching payment",
    };
  }
}
