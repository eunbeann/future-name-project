import React from "react";

export default function CameraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[100vh] ">{children}</div>;
}
