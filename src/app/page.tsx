"use client";

import archiveIcon from "@/app/assets/icon/archiveIcon.png";
import helloIcon from "@/app/assets/icon/helloIcon.png";
import renameIcon from "@/app/assets/icon/renamingIcon.png";
import introBackground from "@/app/assets/image/mainBg.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TaskBar from "./common/TaskBar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="">
        <div className="flex-col gap-y-[37px] pl-[45px] pt-[40px]">
          <Image src={helloIcon} alt="renameIcon" />
          <Link href="/person">
            <Image src={renameIcon} alt="renameIcon" />
          </Link>
          <Image src={archiveIcon} alt="renameIcon" />
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
