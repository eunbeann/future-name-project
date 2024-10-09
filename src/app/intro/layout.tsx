"use client";

import fncIcon from "@/app/assets/icon/fncLogo.png";
import introSubBg from "@/app/assets/image/introSubBg.png";
import introBackground from "@/app/assets/image/mainBg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div>
      <Image
        className="relative h-[100vh] object-full -z-10"
        src={introBackground}
        alt="introBackground"
        fill
        draggable="false"
      />
      <Image
        className="absolute h-[90vh] w-[85vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
        src={introSubBg}
        alt="introBackground"
      />
      {children}
      <button
        className="fixed bottom-[80px] right-5 w-[230px] h-[190px] cursor-pointer z-20"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          className="fixed bottom-[80px] right-5 w-[10vw] cursor-pointer"
          src={fncIcon}
          alt="logoIcon"
          priority
        />
      </button>
    </div>
  );
}
