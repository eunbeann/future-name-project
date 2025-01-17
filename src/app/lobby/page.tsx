"use client";

import movingLogo from "@/app/assets/gif/movingLogo.gif";
import introduceFrame from "@/app/assets/icon/introduceFrame.png";
import renameFrame from "@/app/assets/icon/renameFrame.png";
import welcomeFrame from "@/app/assets/icon/welcomeFrame.png";
import lobbyBg from "@/app/assets/image/lobbyBg.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import MainContainer from "../common/MainContainer";
import LobbyDialog from "./component/LobbyDialog";

function LobbyContent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams?.get("from");

  useEffect(() => {
    console.log("from:", from); // 디버깅 로그
    const timer = setTimeout(() => {
      setIsDialogOpen(true);
      if (from === "archive") {
        router.push("/denied");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [from, router]);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image
        src={movingLogo}
        alt="설명 텍스트"
        className="w-[320px] h-[200px] xl:w-[30%] xl:h-auto xl:my-[10px] xl:pb-[20px]"
      />
      <div className="flex gap-[15px]">
        <input className="border-2 border-[#9F9F9F] bg-[#D9D9D9F2] w-[450px] xl:w-[650px] h-[48px]" />
        <div className="border-2 border-[#9F9F9F] bg-[#D9D9D9F2] w-[100px] text-center font-dunggeunmo xl:text-[24px] flex items-center justify-center">
          SEARCH
        </div>
      </div>
      <div className="bg-[#02FE00] px-[30px] xl:px-[55px] xl:py-[0px] mt-[40px] xl:mt-[60px] xl:mb-[5px] font-dunggeunmo xl:text-[38px] leading-10 flex items-center">
        SITE
      </div>
      <div className="flex gap-[34px] mt-[40px]">
        <Link href="/welcome">
          <Image
            className="w-[280px] h-[170px] xl:w-[420px] xl:h-auto"
            src={welcomeFrame}
            alt="welcomeFrame"
          />
        </Link>
        <Link href="/intro">
          <Image
            className="w-[280px] h-[170px] xl:w-[420px] xl:h-auto"
            src={introduceFrame}
            alt="introduceFrame"
          />
        </Link>
        <Link href="/person">
          <Image
            className="w-[280px] h-[170px] xl:w-[420px] xl:h-auto"
            src={renameFrame}
            alt="renameFrame"
          />
        </Link>
      </div>
      {isDialogOpen && from === "stroy" && (
        <LobbyDialog handleDialogClose={handleDialogClose} />
      )}
    </div>
  );
}

export default function LobbyPage() {
  return (
    <MainContainer bgImage={lobbyBg}>
      <Suspense fallback={<div>Loading...</div>}>
        <LobbyContent />
      </Suspense>
    </MainContainer>
  );
}
