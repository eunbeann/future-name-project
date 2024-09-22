// NextButton.tsx
"use client";

import { useRouter } from "next/navigation";
import React, { memo } from "react";
import { useRecoilState } from "recoil";
import { stepNumbers } from "../atoms/atoms";

interface NextButtonProps {
  action?: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ action }) => {
  console.log("NextButton 렌더링");

  const router = useRouter();
  const [step, setStep] = useRecoilState(stepNumbers);

  const onClickButton = () => {
    if (step !== 7) {
      setStep(step + 1);
    } else {
      router.push("/list");
    }
    if (action) {
      action();
    }
  };

  return (
    <button
      onClick={onClickButton}
      className="absolute left-[36%] bottom-[3.6rem] w-[18rem] h-[4.7rem] text-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center  cursor-pointer"
    >
      확인
    </button>
  );
};

export default memo(NextButton);
