import React from "react";

function Aside({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="hidden lg:block w-80 xl:w-[22rem] bg-light">{children}</div>
  );
}

export default Aside;
