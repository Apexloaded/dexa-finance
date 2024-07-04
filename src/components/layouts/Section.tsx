import React from "react";

function Section({
  className,
  children,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`flex-1 h-full bg-white overflow-hidden ${className}`}>{children}</div>
  );
}

export default Section;
