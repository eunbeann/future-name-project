"use client"; // 클라이언트 컴포넌트로 설정

import fncIcon from "@/app/assets/icon/fncLogo.png";
import listBackground from "@/app/assets/image/listBackground.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ClientRecoilRoot from "../common/ClientRecoilRoot";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <Image
        className="fixed bottom-0 w-full h-[100vh] -z-50"
        src={listBackground}
        alt="introBackground"
        priority
        draggable="false"
      />
      <div className="relative z-10">
        <ClientRecoilRoot>{children}</ClientRecoilRoot>
      </div>
      <button
        className="fixed bottom-[80px] right-5 w-[230px] h-[190px] cursor-pointer z-20"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          className="fixed bottom-[80px] right-5 w-[230px] h-[190px] cursor-pointer z-20"
          src={fncIcon}
          alt="logoIcon"
          priority
        />
      </button>
    </>
  );
}
