import React from "react";
import Input from "../Form/Input";
import { SearchIcon } from "lucide-react";

function BillHeader() {
  return (
    <div className="bg-white border-b border-medium/20 shadow-sm">
      <div className="flex justify-between bg-white max-w-7xl mx-auto py-4 px-5">
        <div className="border border-medium/20 rounded-md h-[2.2rem] flex items-center px-2">
          <p className="text-xs font-semibold">Dexapay Testnet</p>
        </div>
        <div className="w-[40rem] flex items-center border border-medium/20 rounded-lg pl-3 overflow-hidden">
          <SearchIcon className="text-medium" size={18} />
          <Input
            className="h-[2.2rem] flex-1 outline-0 placeholder:font-light text-sm"
            placeholder="Search by Bill ID"
          />
        </div>
      </div>
    </div>
  );
}

export default BillHeader;
