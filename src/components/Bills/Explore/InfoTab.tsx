import React from "react";
import { Bills } from "@/interfaces/bills.interface";

type Props = {
  bill: Bills;
};
function InfoTab({ bill }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-medium/20 p-5">
      <div className="max-w-2xl">
        <p className="text-xl font-bold">{bill.title}</p>
        <p className="text-medium font-thin text-base mt-1">{bill.description}</p>
      </div>
    </div>
  );
}

export default InfoTab;
