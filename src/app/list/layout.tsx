"use client";

import listBg from "@/app/assets/image/listBg.png";
import Image from "next/image";
import ClientRecoilRoot from "../common/ClientRecoilRoot";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Image className="h-[100vh]" src={listBg} alt="list-background-image" />
      <ClientRecoilRoot>{children}</ClientRecoilRoot>
    </div>
  );
}
