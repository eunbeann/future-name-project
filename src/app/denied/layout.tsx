"use client";

import denied from "@/app/assets/image/deniedBg.png";
import deniedLayout from "@/app/assets/image/deniedLayout.png";
import Image from "next/image";
import ClientRecoilRoot from "../common/ClientRecoilRoot";
import MainContainer from "../common/MainContainer";

export default function DeniedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRecoilRoot>
      <Image
        alt="bg"
        src={denied}
        className="relative min-h-screen flex justify-center items-center "
      />
      <MainContainer bgImage={deniedLayout}>{children}</MainContainer>
    </ClientRecoilRoot>
  );
}
