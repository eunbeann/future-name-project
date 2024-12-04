"use client";

import archiveBg from "@/app/assets/image/listBg.png";
import Image from "next/image";
import ClientRecoilRoot from "../common/ClientRecoilRoot";
import MainContainer from "../common/MainContainer";

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRecoilRoot>
      <Image
        className="h-[100vh]"
        src={archiveBg}
        alt="list-background-image"
      />
      <MainContainer>
        <div className="relative">{children}</div>
      </MainContainer>
    </ClientRecoilRoot>
  );
}
