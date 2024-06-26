import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import {
  selectHideBalance,
  setHideBalance,
} from "@/slices/account/hide-balance.slice";
import useStorage from "@/hooks/storage.hook";
import { StorageTypes } from "@/libs/enums";
import { EyeIcon, EyeOffIcon } from "lucide-react";

function EstTotalValue() {
  const isHidden = useAppSelector(selectHideBalance);
  const dispatch = useAppDispatch();
  const { setItem } = useStorage();

  const toggleHide = () => {
    const value = !isHidden;
    setItem(StorageTypes.DEXA_HIDE_BAL, value);
    dispatch(setHideBalance(value));
  };
  return (
    <div>
      <div
        role="button"
        onClick={toggleHide}
        className="flex items-center gap-x-2"
      >
        <p className="text-sm">Est. Total Value</p>
        {isHidden ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
      </div>

      <div className="flex items-end gap-x-1">
        <p className="text-3xl font-semibold mt-2">
          {isHidden ? "*****" : "0.64"}
        </p>
        <p className="text-xs mb-1">ETH</p>
      </div>
    </div>
  );
}

export default EstTotalValue;
