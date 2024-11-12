"use client";

import playBtn from "@/app/assets/gif/playBtn.gif";
import Image from "next/image";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { stepNumbers } from "../person/atoms/atoms";

// TODO: props로 텍스트를 배열로 받고 버튼 클릭시 다음 텍스트로 변경
export default function NeonDialog({
  children,
  action,
}: {
  children?: React.ReactNode;
  action?: () => void;
}) {
  const [step, setStep] = useRecoilState(stepNumbers);

  const onClickButton = useCallback(() => {
    if (step !== 8) {
      setStep((prevStep) => prevStep + 1);
    }
    if (action) {
      action();
    }
  }, [step, setStep, action]);

  return (
    <div className="relative bg-[#02FE00] w-[90%] h-[130px] z-50 flex justify-center items-center rounded-[8px] py-[20px] text-center">
      <div className="font-dunggeunmo whitespace-pre-wrap">{children}</div>
      <button
        className="absolute  right-3 bottom-2 w-fit h-fit p-2"
        onClick={onClickButton}
      >
        <Image
          className="w-[35px] h-[35px]"
          src={playBtn}
          alt="Play Button"
          priority
        />
      </button>
    </div>
  );
}
