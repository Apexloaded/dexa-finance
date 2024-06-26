"use client";

import React from "react";
import { getFirstLetters, stringToColor } from "@/libs/helpers";
import { IBeneficiary } from "@/db/models/beneficiary.model";

type Props = {
  user: IBeneficiary;
};
function NameCard({ user }: Props) {
  const color = stringToColor(user.name);
  const firstLetter = getFirstLetters(user.name);
  const firstName = user.name.split(" ")[0];
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        style={{ backgroundColor: color }}
        role="button"
        className={`h-14 w-14 flex items-center justify-center shadow-md rounded-[0.5rem]`}
      >
        <p className="text-white text-lg">{firstLetter}</p>
      </div>
      <p className="text-xs text-semibold">{firstName}</p>
    </div>
  );
}

export default NameCard;
