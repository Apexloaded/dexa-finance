import React from "react";
import BackButton from "./BackButton";

type Props = {
  title?: string;
  isBack?: boolean;
  children?: React.ReactNode;
};

function Header({ title, isBack = true, children }: Props) {
  return (
    <div className="bg-white xl:bg-white/95 sticky z-50 top-0">
      <div className="flex items-center justify-start space-x-2">
        {isBack && <BackButton />}
        <p className="text-lg font-normal">{title}</p>
      </div>
    </div>
  );
}

export default Header;
