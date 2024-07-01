"use client";

import { useState } from "react";
import Dashboard from "@/components/Home/Dashboard";
import QuickAction from "@/components/Home/quick-actions/QuickAction";
import TxCount from "@/components/Transactions/TxCount";
import Aside from "@/components/layouts/Aside";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import Header from "@/components/ui/Header";
import UserPFP from "@/components/ui/UserPFP";
import { useAuth } from "@/context/auth.context";

export default function Home() {
  const { user } = useAuth();

  return (
      <Container>
        <Section>
          <div className="flex h-full flex-col overflow-scroll scrollbar-hide">
            <div className="flex items-center px-5 py-4 z-50 bg-white justify-between sticky top-0">
              <Header title="Dashboard" isBack={false} />
              <div className="flex items-center gap-x-2">
                <TxCount />
                <UserPFP name={user?.name} />
              </div>
            </div>
            <div>
              <Dashboard />
            </div>
          </div>
        </Section>
        <Aside>
          <QuickAction />
        </Aside>
      </Container>
  );
}
