import React from "react";

function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex h-full overflow-hidden">{children}</div>;
}

export default Container;
