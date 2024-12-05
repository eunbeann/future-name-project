"use client";

import data from "@/app/assets/icon/sendingData.png";
import bg from "@/app/assets/image/sendingBg.png";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { sendingNumber } from "../atoms/atom";

export default function Sending1() {
  const setSendingNumber = useSetRecoilState(sendingNumber);

  const handleAnimationEnd = () => {
    setSendingNumber((prev) => prev + 1);
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image className="w-[600px]" src={data} alt="countDown" priority />

        <div className="absolute left-[55px] bottom-[30px] w-[580px] flex px-[20px] py-[14px] items-center xl:h-[42px] xl:w-[490px] border-[5px] border-[#ffffff]">
          <div
            className="h-[11px] bg-[#02FE00] animate-expand"
            onAnimationEnd={handleAnimationEnd}
          ></div>
        </div>
      </div>
      <Image className="w-full h-[79.5vh]" src={bg} alt="story0" priority />
    </>
  );
}
