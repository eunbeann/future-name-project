"use client";

import ClientRecoilRoot from "../common/ClientRecoilRoot";
import MainContainer from "../common/MainContainer";

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRecoilRoot>
      <div className="relative min-h-screen flex justify-center items-center bg-[#000000]" />
      <MainContainer>{children}</MainContainer>
    </ClientRecoilRoot>
  );
}
