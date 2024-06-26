import MobileMenu from "@/components/layouts/MobileMenu";
import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between xs:justify-start xs:flex-row h-svh overflow-hidden relative overscroll-contain">
      <Sidebar />
      <div className="flex-1 w-full lg:w-4/5 bg-light overflow-hidden">
        {children}
      </div>
      <MobileMenu />
    </div>
  );
}
