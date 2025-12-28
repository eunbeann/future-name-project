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
      <div className="absolute inset-0 w-[2560px] h-[1333px] flex justify-center items-center bg-[#0a1628]">
        <Image
          alt="bg"
          src={denied}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <MainContainer bgImage={deniedLayout}>{children}</MainContainer>
      </div>
    </ClientRecoilRoot>
  );
}
