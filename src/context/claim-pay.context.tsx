"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import VerifyClaimPayOtp from "@/components/Payments/Claims/VerifyClaimPayOtp";
import VerifyEmailView from "@/components/Payments/Claims/VerifyEmailView";
import ClaimPaymentView from "@/components/Payments/Claims/ClaimPayment";
import { useParams } from "next/navigation";
import { decodeBase64, toUtf8String } from "ethers";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/actions/request.action";
import { ISendPayRequest } from "@/interfaces/pay-request.interface";
import EmptyBox from "@/components/ui/EmptyBox";
import { TokenClaimed } from "@/components/Payments/Claims/TokenClaimed";

type IPageType = "email" | "otp" | "claim";

interface ContextType {
  page: IPageType;
  setPage: React.Dispatch<React.SetStateAction<IPageType>>;
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  paymentCode?: string;
  setPaymentCode: React.Dispatch<React.SetStateAction<string | undefined>>;
  otp?: string;
  setOTP: React.Dispatch<React.SetStateAction<string | undefined>>;
  payment?: ISendPayRequest;
  setPayment: React.Dispatch<React.SetStateAction<ISendPayRequest | undefined>>;
  isClaimed: boolean;
  setIsClaimed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClaimPayContext = createContext<ContextType | undefined>(
  undefined
);

export const ClaimPayProvider = () => {
  const param = useParams();
  const [page, setPage] = useState<IPageType>("email");
  const [email, setEmail] = useState<string>();
  const [paymentCode, setPaymentCode] = useState<string>();
  const [otp, setOTP] = useState<string>();
  const [payment, setPayment] = useState<ISendPayRequest>();
  const [isClaimed, setIsClaimed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      if (param.id) {
        const response = await getRequest(`${param.id}`);
        console.log(response);
        if (response.status == true) {
          const payload = response.data as ISendPayRequest;
          setPayment(payload);
          setIsLoading(false);
        }
      }
    };
    void init();
  }, [param.id]);

  function NavigateComponents() {
    if (page === "email") return <VerifyEmailView />;
    if (page === "otp") return <VerifyClaimPayOtp />;
    if (page === "claim") return <ClaimPaymentView />;
  }

  return (
    <ClaimPayContext.Provider
      value={{
        page,
        setPage,
        email,
        setEmail,
        otp,
        setOTP,
        setPaymentCode,
        paymentCode,
        payment,
        setPayment,
        isClaimed,
        setIsClaimed,
      }}
    >
      {!isLoading && payment && !payment.isClaimed && (
        <>
          {payment && (
            <div className="text-center mt-5">
              <p className="text-2xl font-semibold">
                {payment?.amount} {payment?.tokenSymbol}
              </p>
              <p className="text-medium">
                Claim your {payment?.amount} {payment?.tokenSymbol} by
                confirming your email address
              </p>
            </div>
          )}
          <div className="mb-10"></div>
          <NavigateComponents />
        </>
      )}

      {!isLoading && payment && payment.isClaimed && (
        <div className="mt-5">
          <div className="text-center mb-10">
            <p className="text-2xl font-semibold">
              {payment?.amount} {payment?.tokenSymbol} Claimed
            </p>
            <p className="text-medium">
              You have already claimed {payment?.amount} {payment?.tokenSymbol} to your account
            </p>
          </div>
          <TokenClaimed />
        </div>
      )}
    </ClaimPayContext.Provider>
  );
};

export function useClaimPay() {
  const context = useContext(ClaimPayContext);
  if (context === undefined) {
    throw new Error("useRecovery must be used within a ClaimPayProvider");
  }
  return context;
}
