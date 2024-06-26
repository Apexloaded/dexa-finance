"use client";

import React, { useState } from "react";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectConnector } from "@/slices/account/auth.slice";
import { Controller, FieldValues, useForm } from "react-hook-form";
import Button from "@/components/Form/Button";
import { claimPaymentResolver } from "@/schemas/payment.schema";
import Label from "@/components/Form/Label";
import ShowError from "@/components/Form/ShowError";
import Input from "@/components/Form/Input";
import WalletConnectModal from "@/components/Auth/WalletConnectModal";
import useToast from "@/hooks/toast.hook";
import { claimPayByEmail } from "@/actions/request.action";
import { useClaimPay } from "@/context/claim-pay.context";
import { ClipboardPenLineIcon } from "lucide-react";
import useClipBoard from "@/hooks/clipboard.hook";

function VerifyEmailView() {
  const [connectModal, setConnectModal] = useState<boolean>(false);
  const { isConnected, wallet } = useAppSelector(selectConnector);
  const { success, loading, error } = useToast();
  const { setPage, setEmail, setPaymentCode } = useClaimPay();
  const { paste } = useClipBoard();

  const {
    setValue,
    trigger,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm(claimPaymentResolver);

  const onSubmit = async (data: FieldValues) => {
    try {
      if (!isConnected) {
        setConnectModal(true);
        return;
      }
      loading({ msg: "Processing..." });
      const { paymentCode, email } = data;
      const response = await claimPayByEmail({
        ownerAddress: wallet || "",
        email,
        paymentCode,
      });
      if (response.status == true) {
        success({ msg: "Verification code was sent to your email" });
        setPage("otp");
        setEmail(email);
        setPaymentCode(paymentCode);
      } else {
        error({ msg: response.message || "Something went wrong" });
      }
    } catch (err: any) {
      error({ msg: err.message || "Error verifying email" });
    }
  };

  const onPaste = async () => {
    const text = await paste();
    if (!text) return;
    setValue("paymentCode", text);
    trigger("paymentCode");
  };

  return (
    <>
      {connectModal && <WalletConnectModal setModal={setConnectModal} />}
      <div className="bg-white px-8 pb-8 pt-6 rounded-lg">
        <div className="mb-5">
          <p className="text-xl font-semibold text-dark">Confirm Email</p>
          <p className="text-medium text-sm font-light">
            Enter your payment code and email address to verify ownership.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="z-0">
                <Label title="Payment Code" isRequired={true} isMargin={true} />
                <div className="flex items-center relative bg-light">
                  <Input
                    type={"text"}
                    isOutline={false}
                    className="bg-light text-base"
                    placeholder="Payment code"
                    onChange={onChange}
                    value={value ? value : ""}
                  />
                  <div role="button" onClick={onPaste} className="p-4">
                    <ClipboardPenLineIcon className="text-primary" size={20} />
                  </div>
                </div>
                {errors.paymentCode && (
                  <ShowError error={errors.paymentCode.message} />
                )}
              </div>
            )}
            name={"paymentCode"}
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="z-0">
                <Label
                  title="Email Address"
                  isRequired={true}
                  isMargin={true}
                />
                <div className="flex items-center relative bg-light">
                  <Input
                    type={"email"}
                    isOutline={false}
                    className="bg-light text-base"
                    placeholder="email@example.com"
                    onChange={onChange}
                    value={value ? value : ""}
                  />
                </div>
                {errors.email && <ShowError error={errors.email.message} />}
              </div>
            )}
            name={"email"}
          />

          <div className="flex flex-col gap-5 mt-6">
            <Button
              onClick={handleSubmit(onSubmit)}
              shape={"NORMAL"}
              type="button"
              className="h-12"
              kind="primary"
              disabled={isSubmitting || !isValid}
            >
              Confirm Email
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmailView;
