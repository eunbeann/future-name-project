import rightArrow from "@/app/assets/icon/rightArrow.png";
import TypingText from "@/app/common/TypingText";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { stepNumbers } from "../atoms/atoms";

export default function Second() {
  const [step, setStep] = useRecoilState(stepNumbers);
  const [isComplete, setIsComplete] = useState(false);
  const handleComplete = () => {
    setIsComplete(true);
  };

  const onClickButton = useCallback(() => {
    if (step !== 8) {
      setStep((prevStep) => prevStep + 1);
    }
  }, [step, setStep]);

  return (
    <div>
      <p className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] whitespace-pre-line text-center w-[760px]">
        <TypingText
          onComplete={handleComplete}
          text={`퓨이름은 시대에 따라 다르게 사용되었습니다.\n과거에는 사회적, 문화적 의미를 담았지만,\n지금은 그런 의미는 없습니다.\n이름은 이제 시스템의 일부일 뿐입니다.`}
        />
      </p>

      {/* <NextButton /> */}
      <button
        className="absolute left-[36%] bottom-[3.6rem] rounded-[13px] text-[#ffffff] border-2 border-[#ffffff] text-center cursor-pointer"
        onClick={onClickButton}
      >
        <div className="flex items-center py-2">
          <Image
            className="w-[5px] h-[13px] mr-[56px] ml-[35px]"
            src={rightArrow}
            alt="rightArrow"
          />
          <p className="mr-[70px]">미래의 이름은 어떻게 변하나요?</p>
        </div>
      </button>
    </div>
  );
}
