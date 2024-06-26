import React, { useState } from "react";
import ListAllSavingsBody from "./ListAllSavingsBody";

type Props = {}
export default function ListAllSavings() {
  const [savings, setSaving] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className="flex-1 max-w-full overflow-auto border border-light rounded-lg">
      <table className="table-fixed w-full border-collapse separate border-spacing-y-4">
        <thead className="border-b border-light px-4">
          <tr className="h-14 text-left font-bold">
            <th className="px-4 text-medium text-sm text-left w-32">Plans</th>
            <th className="px-4 text-medium text-sm w-24">Status</th>
            <th className="px-4 text-medium text-sm w-24">Interest</th>
            <th className="px-4 text-medium text-sm w-32 text-nowrap">
              Due Date
            </th>
            <th className="px-4 text-medium text-sm w-10"></th>
          </tr>
        </thead>
        <tbody>
          {savings.map((saving, index) => (
            <ListAllSavingsBody key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
