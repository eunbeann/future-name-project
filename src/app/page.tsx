"use client";

import movingLogo from "@/app/assets/gif/movingLogo.gif";
import archiveIcon from "@/app/assets/icon/archiveIcon.png";
import helloIcon from "@/app/assets/icon/helloIcon.png";
import renameIcon from "@/app/assets/icon/renamingIcon.png";
import introBackground from "@/app/assets/image/mainBg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TaskBar from "./common/TaskBar";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-y-[20px] pl-[45px] pt-[40px]">
          <button className="hover:cursor-not-allowed w-[134px] ">
            <Image src={helloIcon} alt="renameIcon" />
          </button>
          <button className="w-[134px]" onClick={() => router.push("/person")}>
            <Image src={renameIcon} alt="renameIcon" />
          </button>
          <button className="hover:cursor-not-allowed  w-[134px]">
            <Image src={archiveIcon} alt="renameIcon" />
          </button>
        </div>
        <Image
          className="relative h-[100vh] object-full -z-10"
          src={introBackground}
          alt="introBackground"
          fill
          draggable="false"
        />

        <Image
          src={movingLogo}
          alt="설명 텍스트"
          className="absolute w-[480px] h-auto left-1/2 top-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <TaskBar />
    </>
  );
}
