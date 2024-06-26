"use client";

import React from "react";
import { LucideIcon, TimerIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
  title: string;
  amount: string;
  Icon: LucideIcon;
  message?: string;
  className?: string;
  iconBg?: string;
  textColor?: string;
};
function InfoCard({
  title,
  amount,
  Icon,
  message,
  className,
  iconBg,
  textColor,
}: Props) {
  const isMatch = useMediaQuery("(max-width: 1280px)");

  return (
    <div className={`aspect-auto ${className} border-light h-full p-3 xl:p-5`}>
      <div className="flex items-start h-full justify-between">
        <div className="flex flex-1 flex-col h-full justify-start">
          <p
            className={`text-sm ${
              textColor ? textColor : "text-medium"
            } font-light`}
          >
            {title}
          </p>
          <p
            className={`text-lg xl:text-2xl ${
              textColor ? textColor : "text-dark/80"
            }  font-semibold mt-1 text-nowrap`}
          >
            {amount}
          </p>
          {message && (
            <p className="text-sm text-medium font-light hidden md:flex items-center">
              <TimerIcon size={14} className="text-primary" />
              <span className="text-primary/70 font-medium pr-1">10d</span>{" "}
              {message}
            </p>
          )}
        </div>
        <div className="hidden md:flex items-center flex-col h-full justify-between ">
          <div
            className={`${
              iconBg ? iconBg : "bg-primary/10"
            }  w-8 h-8 xl:w-10 xl:h-10 rounded-full flex items-center justify-center`}
          >
            <Icon size={isMatch ? 18 : 25} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
