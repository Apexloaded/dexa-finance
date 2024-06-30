"use client";

import React, { useState } from "react";
import TxCount from "@/components/Transactions/TxCount";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import Header from "@/components/ui/Header";
import UserPFP from "@/components/ui/UserPFP";
import { useAuth } from "@/context/auth.context";
import Aside from "@/components/layouts/Aside";
import QuickAction from "@/components/Home/quick-actions/QuickAction";
import RequestPaymentForm from "@/components/Payments/RequestPaymentForm";

function RequestPayment() {
  const { user } = useAuth();
  return (
    <Container>
      <Section>
        <div className="flex h-full flex-col overflow-scroll scrollbar-hide">
          <div className="flex items-center border-b border-light pr-5 py-4 pl-2 z-50 bg-white justify-between sticky top-0">
            <Header title="Request Pay" isBack={true} />
            <div className="flex items-center gap-x-2">
              <UserPFP name={user?.name} />
            </div>
          </div>
          <div className="bg-white flex-1">
            <div className="max-w-xl mx-auto mt-5">
              <TxCount extra={"Transactions"} />
              <div className="px-5 w-full border border-light shadow-sm bg-white mt-1 pt-5 pb-8">
                <div className="mb-5 text-center">
                  <p className="text-dark text-xl">Email Request</p>
                  <p className="text-sm text-medium font-light">
                    Request payment for service you provided to your client via
                    email.
                  </p>
                </div>
                <RequestPaymentForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Aside>
        <QuickAction showQuickPayBtn={true} />
      </Aside>
    </Container>
  );
}

export default RequestPayment;
