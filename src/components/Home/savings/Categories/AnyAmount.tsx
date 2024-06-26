"use client";

import React, { useEffect } from "react";
import { ChevronRightIcon, GalleryHorizontalEndIcon } from "lucide-react";
import { useAppDispatch } from "@/hooks/redux.hook";
import { setSavingsTabs } from "@/slices/savings/active-tab.slice";
import { useRouter } from "next/navigation";
import { routes } from "@/libs/routes";

function AnyAmount() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    router.prefetch(routes.app.savings.index);
  }, [router]);

  const onClick = () => {
    router.push(routes.app.savings.index);
    dispatch(setSavingsTabs("tab1"));
  };

  return (
    <div
      onClick={onClick}
      role="button"
      className="flex items-center justify-between group cursor-pointer gap-x-5"
    >
      <div className="flex items-center gap-x-2 flex-1">
        <div className="bg-primary/30 h-11 w-11 rounded-full flex items-center justify-center">
          <GalleryHorizontalEndIcon size={25} className="text-primary" />
        </div>
        <div>
          <p className="font-bold group-hover:text-primary">As You Want</p>
          <p className="text-sm text-medium group-hover:text-primary/70">
            Save whenever you want
          </p>
        </div>
      </div>
      <ChevronRightIcon size={20} className="group-hover:text-primary" />
    </div>
  );
}

export default AnyAmount;
