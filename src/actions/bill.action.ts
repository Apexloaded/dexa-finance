"use server";

import { CreateBill } from "@/interfaces/bills.interface";
import { postApi } from "./api.action";
import { IActionResponse } from "@/interfaces/response.interface";

export async function createBill(
  payload: CreateBill
): Promise<IActionResponse> {
  try {
    const response = await postApi("bill/create", payload);
    if (response.status == 201) {
      const data = response.data.data;
      return { status: true, message: "success", data };
    }
    return { status: false, message: "Error creating bill" };
  } catch (error: any) {
    return {
      status: false,
      message: `${error.message}` || "Error creating bill",
    };
  }
}
