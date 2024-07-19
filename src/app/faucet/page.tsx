"use client";

import React from "react";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import NavBar from "@/components/ui/NavBar";
import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { isAddress } from "ethers";
import ShowError from "@/components/Form/ShowError";
import { requestFaucet } from "@/actions/faucet.action";
import useToast from "@/hooks/toast.hook";
import Link from "next/link";

export default function Faucet() {
  const { error, success, loading } = useToast();
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading, isDirty, isValid },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      loading({
        msg: "Requesting faucet",
      });
      const { wallet } = data;
      const res = await requestFaucet(wallet);
      if (res.status == true) {
        success({ msg: "Faucet successfully sent" });
        reset({ wallet: "" });
      } else {
        error({ msg: res.message || "Error sending faucet" });
      }
    } catch (err: any) {
      error({ msg: err.message || "Error sending faucet" });
    }
  };

  return (
    <Container>
      <Section>
        <div className="overflow-y-scroll h-svh relative">
          <NavBar />
          <div className="max-w-3xl mx-auto mt-20 px-5">
            <p className="uppercase text-primary text-3xl font-semibold text-center">
              <span className="text-dark">Dexapay</span> Faucet
            </p>
            <p className="text-center text-medium mt-1">
              Obtain Dexapay Testnet tokens every 24 hours for seamless testing.
            </p>
            <div className="bg-light p-5 md:p-10 rounded-xl md:rounded-3xl mt-10">
              <div className="mb-5">
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Label
                        title="Wallet Address"
                        isMargin={true}
                        isRequired={true}
                      />
                      <Input
                        placeholder="Enter your Base Sepolia Testnet Address."
                        className="rounded-lg"
                        onChange={onChange}
                        value={value}
                      />
                      {errors.wallet && (
                        <ShowError error={`${errors.wallet.message}`} />
                      )}
                    </>
                  )}
                  rules={{
                    required: true,
                    validate: (value) =>
                      isAddress(value) || "Enter a valid wallet address",
                  }}
                  name="wallet"
                  defaultValue={""}
                />
              </div>
              <Button
                onClick={handleSubmit(onSubmit)}
                kind="primary"
                type="submit"
                className="w-full h-12"
                disabled={isSubmitting || isLoading || !isDirty || !isValid}
              >
                Send 1 BNB
              </Button>
            </div>
            <p className="text-center text-medium mt-4">
              Obtain Base Sepolia ETH{" "}
              <Link className="text-primary" href={"https://console.optimism.io/faucet"} target="_blank">
                Here
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </Container>
  );
}
