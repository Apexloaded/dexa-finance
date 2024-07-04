"use client";

import React from "react";
import { routes } from "@/libs/routes";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
function WelcomeText() {
  const [text, count] = useTypewriter({
    words: [
      "send funds to email",
      "request payment",
      "accept payment",
      "raise quick funds",
    ],
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 80,
  });

  return (
    <div className="z-10 px-5 h-full pt-40 relative">
      <div className="max-w-6xl h-full flex flex-col justify-between mx-auto z-50">
        <div className="max-w-3xl">
          <div className="flex flex-col gap-y-4 text-dark/80">
            <p className="text-4xl md:text-6xl lg:text-[5rem] text-nowrap leading-none font-black">
              Seamlessly
            </p>
            <p className="text-4xl md:text-6xl lg:text-[5rem] text-nowrap leading-none font-black">
              {text}
              <Cursor />
            </p>
            <p className="text-4xl md:text-6xl lg:text-[5rem] text-nowrap leading-none font-black">
              in cryptocurrecy.
            </p>
          </div>
          <div className="max-w-lg mt-6 pb-20">
            <p className="text-xl">
              Dexapay helps individuals get paid by anyone, anywhere in the
              world using cryptocurrecy.
            </p>
            <div className="flex items-start md:items-center flex-col md:flex-row gap-x-1 mt-10">
              <div>
                <Link
                  prefetch={true}
                  href={routes.register}
                  className="bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200"
                >
                  Create a free account
                </Link>
              </div>
              <div className="hidden sm:inline-block">
                <Link
                  prefetch={true}
                  href={routes.login}
                  className="text-primary py-4 px-4"
                >
                  or Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="flex items-center">
            <StarIcon className="fill-primary stroke-primary" />
            <StarIcon className="fill-primary stroke-primary" />
            <StarIcon className="fill-primary stroke-primary" />
            <StarIcon className="fill-primary stroke-primary" />
            <StarIcon className="fill-primary stroke-primary" />
          </div>
          <p className="text-xl mt-1">
            Trust By <span className="text-primary font-bold">1000+</span>{" "}
            individuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeText;
