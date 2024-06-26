"use client";

import React from "react";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectConnector } from "@/slices/account/auth.slice";
import { Controller, FieldValues, useForm } from "react-hook-form";
import Button from "@/components/Form/Button";
import useToast from "@/hooks/toast.hook";
import { verifyOtp } from "@/actions/request.action";
import OTPForm from "@/components/Auth/OTPForm";
import { useClaimPay } from "@/context/claim-pay.context";
import ShowError from "@/components/Form/ShowError";

function VerifyClaimPayOtp() {
  const { wallet } = useAppSelector(selectConnector);
  const { loading, error, success } = useToast();
  const { setPage, paymentCode, email, setOTP } =
    useClaimPay();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      loading({ msg: "Authenticating..." });
      const response = await verifyOtp({
        ownerAddress: wallet || "",
        email: email || "",
        paymentCode: paymentCode || "",
        otp: data.otp,
      });
      if (response.status == true) {
        setPage("claim");
        setOTP(data.otp);

        success({ msg: "Verified" });
      } else {
        error({ msg: response.message || "Something went wrong" });
      }
    } catch (err: any) {
      error({ msg: err.message || "Error verifying email" });
    }
  };

  return (
    <>
      <div className="bg-white p-8 rounded-lg">
        <div className="mb-10 text-center px-10">
          <p className="text-xl font-semibold text-dark mb-1">
            Verify Your Email
          </p>
          <p className="text-medium text-sm font-light">
            We are sending an OTP message to your email address to verify your
            ownership.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <div>
                <OTPForm
                  onChange={(value) => {
                    onChange(value);
                  }}
                />
                {errors.otp && <ShowError error={`${errors.otp.message}`} />}
              </div>
            )}
            name={"otp"}
            rules={{
              required: true,
              pattern: {
                value: /^\d{6}$/,
                message: "OTP must be 6 digits",
              },
            }}
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
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyClaimPayOtp;
