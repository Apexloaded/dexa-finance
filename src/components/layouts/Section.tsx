import React from "react";

function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 h-full bg-white overflow-hidden">{children}</div>
  );
}

export default Section;
