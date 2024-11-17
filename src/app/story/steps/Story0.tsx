"use client";

import countDown from "@/app/assets/gif/countDown.gif";
import story0 from "@/app/assets/image/storyImg0.png";
import Image from "next/image";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { storyNumbers } from "../atoms/atoms";

export default function Story0() {
  const setStoryNumber = useSetRecoilState(storyNumbers);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStoryNumber((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setStoryNumber]);

  return (
    <>
      <Image className="w-full h-full" src={story0} alt="story0" priority />
      <div className="flex w-full justify-center">
        <Image
          className="absolute top-[80px] w-[600px] opacity-40"
          src={countDown}
          alt="countDown"
        />
      </div>
    </>
  );
}
