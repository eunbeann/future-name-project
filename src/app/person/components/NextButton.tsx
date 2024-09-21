"use client";

import { useRecoilState } from "recoil";
import { stepNumbers } from "../atoms/atoms";

interface NextButtonProps {
  action?: () => void;
}

export default function NextButton({ action }: NextButtonProps) {
  const [step, setStep] = useRecoilState(stepNumbers);

  const onClickButton = () => {
    setStep(step + 1);
    if (action) {
      action();
    }
  };

  return (
    <button
      onClick={onClickButton}
      className="absolute left-[36%] bottom-[3.6rem] w-[18rem] h-[4.7rem] text-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center pt-[1.1rem] cursor-pointer"
    >
      확인
    </button>
  );
}
