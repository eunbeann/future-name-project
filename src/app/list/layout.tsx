"use client";

import listBg from "@/app/assets/image/listBg.png";
import Image from "next/image";
import ClientRecoilRoot from "../common/ClientRecoilRoot";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#000000]">
      <Image
        src={listBg}
        alt="list-background-image"
        fill
        style={{ objectFit: "cover" }}
      />
      <ClientRecoilRoot>{children}</ClientRecoilRoot>
    </div>
  );
}
