"use client";

import React, { useEffect, useState } from "react";
import Button from "../../Form/Button";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import Input from "../../Form/Input";
import NameCard from "./NameCard";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/auth.context";
import axios from "axios";
import { IActionResponse } from "@/interfaces/response.interface";
import { IBeneficiary } from "@/db/models/beneficiary.model";
import { listBeneficiary } from "@/actions/beneficiary.action";

function QuickSend() {
  const [query, setQuery] = useState<string>("");
  const [beneficiaries, setBeneficiaries] = useState<IBeneficiary[]>([]);
  const { user } = useAuth();
  const isEmpty = query.length < 1;

  const { data } = useQuery({
    queryKey: ["list", user?.wallet],
    queryFn: () => listBeneficiary(`${user?.wallet}`),
    enabled: !!user?.wallet,
  });

  useEffect(() => {
    if (data) {
      const payload = data.data as IBeneficiary[];
      setBeneficiaries(payload);
    }
  }, [data]);

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-base">Beneficiaries</p>
        <p className="text-primary text-sm font-semibold">View all</p>
      </div>
      <div className="mt-4">
        <div className="flex gap-x-3">
          <div
            role="button"
            className="flex flex-col justify-center items-center gap-2 "
          >
            <div className="bg-white hover:bg-white/70 h-14 w-14 flex items-center justify-center shadow-md rounded-[0.5rem]">
              <PlusIcon size={20} className="text-primary" />
            </div>
            <p className="text-xs text-semibold">New</p>
          </div>
          <div className="flex-1 flex gap-x-3 overflow-scroll scrollbar-hide rounded-[0.5rem]">
            {beneficiaries.map((b) => (
              <NameCard key={b.id} user={b} />
            ))}
          </div>
        </div>
        <div className="flex mt-4 gap-x-3 items-center">
          <Input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Amount"
            className="flex-1 rounded-md text-base placeholder:text-primary/40"
          />
          <Button
            kind="clear"
            shape="CIRCLE"
            disabled={isEmpty}
            className={`h-11 w-11 ${isEmpty ? "bg-primary/20" : "bg-primary"}`}
          >
            <ArrowRightIcon
              size={20}
              className={`${isEmpty ? "text-primary" : "text-white"}`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuickSend;
