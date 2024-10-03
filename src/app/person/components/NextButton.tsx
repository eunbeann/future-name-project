"use client";

import { memo, useCallback } from "react";
import { useRecoilState } from "recoil";
import { stepNumbers } from "../atoms/atoms";

interface NextButtonProps {
  action?: () => void;
}

const NextButton = ({ action }: NextButtonProps) => {
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
    <button
      onClick={onClickButton}
      className="absolute left-1/2 -translate-x-1/2  bottom-[3.6rem] w-[18rem] h-[4.7rem] text-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center cursor-pointer"
    >
      확인
    </button>
  );
};

export default memo(NextButton);
