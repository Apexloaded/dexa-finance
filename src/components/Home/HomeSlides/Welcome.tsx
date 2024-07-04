"use client";

import React from "react";
import AminateWelcome from "./AminateWelcome";
import WelcomeText from "./WelcomeText";
function Welcome() {
  return (
    <div className="bg-white h-svh -mt-20 select-none overflow-hidden relative">
      <WelcomeText />
      <AminateWelcome />
    </div>
  );
}

export default Welcome;
