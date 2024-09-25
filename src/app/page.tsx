"use client";

import archiveIcon from "@/app/assets/icon/archiveIcon.png";
import helloIcon from "@/app/assets/icon/helloIcon.png";
import renameIcon from "@/app/assets/icon/renamingIcon.png";
import introBackground from "@/app/assets/image/mainBg.png";
import Image from "next/image";
import Link from "next/link";
import TaskBar from "./common/TaskBar";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="flex-col gap-y-[37px] pl-[45px] pt-[40px]">
          <button className="hover:cursor-not-allowed">
            <Image src={helloIcon} alt="renameIcon" />
          </button>
          <Link href="/person">
            <Image src={renameIcon} alt="renameIcon" />
          </Link>
          <button className="hover:cursor-not-allowed">
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
      </div>
      <TaskBar />
    </>
  );
}
