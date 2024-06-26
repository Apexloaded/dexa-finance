"use server";

import { IActionResponse } from "@/interfaces/response.interface";
import { postApi, getApi } from "./api.action";

type PayWithEmail = {
  email: string;
  amount: number;
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  from: string;
  senderName: string;
};

type IClaimPayByEmail = {
  paymentCode: string;
  email: string;
  ownerAddress: string;
};

interface VerifyOTP extends IClaimPayByEmail {
  otp: string;
}

export async function sendPayWithEmail(
  data: PayWithEmail
): Promise<IActionResponse> {
  try {
    const { email, amount, ...others } = data;
    const payload = {
      recipient_email: email,
      amount: Number(amount),
      ...others,
    };
    const response = await postApi("payment/email", payload);
    const payment = response.data;
    return {
      status: true,
      message: "success",
      data: {
        paymentId: payment.data.paymentId,
        email: payment.data.recipient_email,
      },
    };
  } catch (error: any) {
    console.log(error)
    return {
      status: false,
      message: error.message || "Error sending payment",
    };
  }
}

export async function claimPayByEmail(
  data: IClaimPayByEmail
): Promise<IActionResponse> {
  try {
    const response = await postApi(`payment/verify-email`, data);
    const payment = response.data;
    return {
      status: true,
      message: "success",
      data: {
        paymentId: payment.data.paymentCode,
        email: payment.data.email,
        ownerAddress: payment.data.ownerAddress,
      },
    };
  } catch (error: any) {
    return {
      status: false,
      message: error.message || "Error sending payment",
    };
  }
}

export async function verifyOtp(data: VerifyOTP): Promise<IActionResponse> {
  try {
    const response = await postApi(`payment/verify-otp`, data);
    const payment = response.data;
    return {
      status: true,
      message: "success",
      data: {
        paymentId: payment.data.paymentCode,
        email: payment.data.email,
        ownerAddress: payment.data.ownerAddress,
      },
    };
  } catch (error: any) {
    return {
      status: false,
      message: error.message || "Error sending payment",
    };
  }
}

export async function getRequest(reqId: string): Promise<IActionResponse> {
  try {
    const response = await getApi(`payment/claim/${reqId}`);
    const payment = response.data;
    if (response.status === 200) {
      return {
        status: true,
        message: "success",
        data: payment.data,
      };
    }
    return { status: false, message: "error", data: response };
  } catch (error: any) {
    return {
      status: false,
      message: error.message || "Error fetching payment",
    };
  }
}

export async function initClaimFund(data: VerifyOTP): Promise<IActionResponse> {
  try {
    const response = await postApi(`payment/initialize-claim`, data);
    const payment = response.data;
    return {
      status: true,
      message: "success",
      data: {
        paymentId: payment.data.paymentCode,
        email: payment.data.email,
        sig: payment.data.signature,
        tokenAddress: payment.data.tokenAddress
      },
    };
  } catch (error: any) {
    return {
      status: false,
      message: error.message || "Error sending payment",
    };
  }
}
