"use client";

import playBtn from "@/app/assets/gif/playBtn.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilState } from "recoil";
import { stepNumbers } from "../person/atoms/atoms";
import { storyNumbers } from "../story/atoms/atoms";

export default function NeonDialog({
  children,
  action,
  story,
}: {
  children?: React.ReactNode;
  action?: () => void;
  story?: boolean;
}) {
  const [step, setStep] = useRecoilState(stepNumbers);
  const [storyStep, setStoryStep] = useRecoilState(storyNumbers);
  const router = useRouter();

  const onClickButton = () => {
    if (story) {
      if (storyStep !== 4) {
        setStoryStep((prevStep) => prevStep + 1);
      } else if (storyStep === 4) {
        router.push("/lobby");
      }
    } else {
      if (step !== 8) {
        setStep((prevStep) => prevStep + 1);
      }
    }
    if (action) {
      action();
    }
  };

  return (
    <div className="relative bg-[#02FE00] w-[90%] h-[130px] xl:h-[250px] z-50 flex justify-center items-center rounded-[8px] py-[20px] text-center xl:w-[76%]">
      <div className="font-dunggeunmo whitespace-pre-wrap">{children}</div>
      <button
        className="absolute right-3 bottom-2 w-fit h-fit p-2"
        onClick={onClickButton}
      >
        <Image
          className="w-[35px] h-[35px] xl:w-[60px] xl:h-[60px]"
          src={playBtn}
          alt="Play Button"
          priority
        />
      </button>
    </div>
  );
}
