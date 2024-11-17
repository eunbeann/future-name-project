"use client";

import movingLogo from "@/app/assets/gif/movingLogo.gif";
import introduceFrame from "@/app/assets/icon/introduceFrame.png";
import renameFrame from "@/app/assets/icon/renameFrame.png";
import welcomeFrame from "@/app/assets/icon/welcomeFrame.png";
import lobbyBg from "@/app/assets/image/lobbyBg.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../common/MainContainer";
import LobbyDialog from "./component/LobbyDialog";

export default function LobbyPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDialogOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDialogClose = () => {
    console.log("handleDialogClose");
    setIsDialogOpen(false);
  };

  return (
    <MainContainer bgImage={lobbyBg}>
      <div className="flex flex-col justify-center items-center h-full">
        <Image
          src={movingLogo}
          alt="설명 텍스트"
          className="w-[320px] h-[200px] xl:w-[30%] xl:h-auto xl:my-[10px] xl:pb-[20px]"
        />
        <div className="flex gap-[15px]">
          <input className="border-2 border-[#9F9F9F] bg-[#D9D9D9F2] w-[450px] xl:w-[650px] h-[48px]" />
          <div className="border-2 border-[#9F9F9F] bg-[#D9D9D9F2] w-[100px] text-center font-dunggeunmo xl:text-[24px]">
            SEARCH
          </div>
        </div>
        <div className="bg-[#02FE00] px-[30px] xl:px-[55px] mt-[40px] xl:mt-[60px] xl:mb-[25px] font-dunggeunmo xl:text-[34px]">
          SITE
        </div>
        <div className="flex gap-[34px]">
          <Link href="/welcome">
            <Image
              className="w-[280px] h-[170px] xl:w-[380px] xl:h-auto"
              src={welcomeFrame}
              alt="welcomeFrame"
            />
          </Link>
          <Link href="/intro">
            <Image
              className="w-[280px] h-[170px] xl:w-[380px] xl:h-auto"
              src={introduceFrame}
              alt="introduceFrame"
            />
          </Link>
          <Link href="/person">
            <Image
              className="w-[280px] h-[170px] xl:w-[380px] xl:h-auto"
              src={renameFrame}
              alt="renameFrame"
            />
          </Link>
        </div>
        {isDialogOpen && <LobbyDialog handleDialogClose={handleDialogClose} />}
      </div>
    </MainContainer>
  );
}
