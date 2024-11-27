import React from "react";

export default function CameraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-[100vw] h-[100vh]">{children}</div>;
}
