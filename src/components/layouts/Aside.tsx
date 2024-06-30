import React from "react";

function Aside({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`hidden lg:block w-80 xl:w-[22rem] bg-light ${className}`}>
      {children}
    </div>
  );
}

export default Aside;
