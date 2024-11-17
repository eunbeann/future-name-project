"use client";

import arrow from "@/app/assets/gif/movingArrow.gif";
import text from "@/app/assets/image/welcomeTxt.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  return (
    <>
      <Image
        className="w-[100vw] h-[100vh] object-cover z-30"
        src={text}
        alt="text"
      />
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
    </>
  );
}
