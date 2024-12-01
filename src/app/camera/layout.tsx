import React from "react";
import ClientRecoilRoot from "../common/ClientRecoilRoot";

export default function CameraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRecoilRoot>
      <div className="w-[100vw] h-[100vh]">{children}</div>;
    </ClientRecoilRoot>
  );
}
