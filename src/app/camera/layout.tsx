import React from "react";

export default function CameraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[100vh] bg-mauve12">{children}</div>;
}
