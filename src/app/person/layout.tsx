"use client";

import movingText from "@/app/assets/gif/personBgText.gif";
import fncIcon from "@/app/assets/icon/fncLogo.png";
import personBackground from "@/app/assets/image/personBg.png";
import personBox from "@/app/assets/image/personBox.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ClientRecoilRoot from "../common/ClientRecoilRoot";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <ClientRecoilRoot>
      <div className="relative min-h-screen flex justify-center items-center">
        <div className="relative z-10">
          <div className="flex justify-center items-center text-white">
            <div className="relative">
              <Image
                className="z-30 w-300 h-200"
                src={personBox}
                alt="introBackground"
              />
              {children}
            </div>
          </div>
        </div>
        <Image
          src={personBackground}
          className="object-cover -z-10"
          alt="introBackground"
          layout="fill"
          priority={true}
        />
        <Image
          className="absolute h-[90%] w-[75%]"
          src={movingText}
          alt="movingText"
        />
        <button
          className="fixed bottom-[80px] right-5 w-[230px] h-[190px] cursor-pointer z-20"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            className="fixed bottom-[80px] right-5 w-[230px] h-[190px] cursor-pointer"
            src={fncIcon}
            alt="logoIcon"
            priority
          />
        </button>
      </div>
    </ClientRecoilRoot>
  );
}
