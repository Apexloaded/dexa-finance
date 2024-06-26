import React from "react";
import { PlusIcon } from "lucide-react";
import Button from "@/components/Form/Button";
import ListAllSavings from "./ListAll/ListAllSavings";
import EstTotalValue from "./EstTotalValue";
import AnyAmount from "./Categories/AnyAmount";
import AutoAmount from "./Categories/AutoAmount";
import FixedAmount from "./Categories/FixedAmount";

function Savings() {
  const all = [
    {
      id: "49098789",
      type: "0",
      description: "I am saving money for my new car",
      amount: 3000000000000000000,
      interest: 10,
      status: "Active",
      createdAt: "2024-05-01",
      dueDate: "2024-10-01",
    },
    {
      id: "56789087",
      type: "1",
      description: "This is a fixed amount for starting my company",
      amount: 15000000000000000000,
      interest: 25,
      status: "Active",
      createdAt: "2024-09-01",
      dueDate: "2025-10-01",
    },
  ];
  
  return (
    <div className="w-full flex-1 mt-3">
      <div className="px-5 flex items-start justify-between">
        <EstTotalValue />
        <Button kind="primary" size="LARGE" className="h-[2.5rem]">
          <p className="flex items-center gap-x-1">
            <PlusIcon size={18} />
            <span>Save Money</span>
          </p>
        </Button>
      </div>
      <div className="mt-8 flex flex-col justify-between px-5 gap-y-5">
        <AnyAmount />
        <AutoAmount />
        <FixedAmount />
      </div>
      <div className="px-5 my-10">
        <p className="mb-2 font-semibold">Savings History</p>
        <ListAllSavings />
      </div>
    </div>
  );
}

export default Savings;
