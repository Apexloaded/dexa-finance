import Image from "next/image";
import React from "react";
import { getFirstLetters } from "@/libs/helpers";

type Props = {
  pfp?: string;
  name?: string;
  className?: string;
};
function UserPFP({
  pfp,
  name,
  className,
}: Props) {
  return (
    <div role="button" className={`w-9 relative ${className}`}>
      <div className="hover:bg-dark/20 cursor-pointer h-9 w-9 rounded-full absolute"></div>
      {pfp ? (
        <Image
          src={pfp}
          height={400}
          width={400}
          alt={"PFP"}
          placeholder="blur"
          blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          className="h-9 w-9 rounded-full"
          priority={true}
        />
      ) : (
        <div className="h-9 w-9 bg-white/90 border border-primary rounded-full flex justify-center items-center">
          <p className="text-sm font-semibold text-primary">
            {getFirstLetters(`${name}`)}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserPFP;
