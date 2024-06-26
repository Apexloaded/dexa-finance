"use client";
import { ArrowBigDown, ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function ListAllSavingsBody() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <tr
        role="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 border-b border-light rounded-lg last-of-type:border-none cursor-pointer hover:bg-primary/20 ${
          isOpen && "bg-primary/20"
        }`}
      >
        <td className="px-4">
          <div className="flex items-center gap-x-2">
            <Image
              src="/banner/bg.png"
              width={100}
              height={100}
              alt="image"
              className="h-10 w-10"
            />
            <div className="flex-1">
              <p className="text-sm text-left font-bold">Flexible</p>
              <p className="text-medium text-sm">$3,000</p>
            </div>
          </div>
        </td>
        <td className="px-4">
          <p className="text-sm text-left">Active</p>
        </td>
        <td className="px-4">
          <p className="text-sm text-left">4% APR</p>
        </td>
        <td className="px-4">
          <p className="text-sm text-left">May 10, 2024</p>
        </td>
        <td className="px-4 ">
          <p className="text-sm rounded-sm float-end bg-primary/40 w-7 h-7 flex items-center justify-center">
            <ChevronDown
              className={`text-white duration-200 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </p>
        </td>
      </tr>
      {isOpen && (
        <tr className="border-b border-light">
          <td colSpan={5}>
            <div className="p-5">d</div>
          </td>
        </tr>
      )}
    </>
  );
}

export default ListAllSavingsBody;
