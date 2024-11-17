"use client";

import arrow from "@/app/assets/gif/movingArrow.gif";
import text from "@/app/assets/image/welcomeTxt.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MainContainer from "../common/MainContainer";

import bg from "@/app/assets/image/welcomeBg.png";
export default function WelcomePage() {
  const router = useRouter();
  return (
    <MainContainer bgImage={bg}>
      <Image className="w-[100%] h-[100%] object-cover" src={text} alt="text" />
      <button
        onClick={() => {
          router.back();
        }}
      >
        <Image
          className="absolute left-[54px] bottom-[37px] xl:w-[98px] "
          src={arrow}
          alt="arrow"
        />
      </button>
    </MainContainer>
  );
}
