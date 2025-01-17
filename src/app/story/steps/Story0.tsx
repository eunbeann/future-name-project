"use client";

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
    <div className="w-full h-[79vh] relative rounded-b-[32px]">
      <Image
        className="w-full h-full object-cover"
        src={story0}
        alt="story0"
        priority
      />
    </div>
  );
}
