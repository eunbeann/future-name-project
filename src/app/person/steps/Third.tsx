"use client";

import TypingText from "@/app/common/TypingText";
import { useCallback, useState } from "react";
import NextButton from "../components/NextButton";

export default function Third() {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  return (
    <div>
      <p className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] whitespace-pre-line text-center w-[760px]">
        <TypingText
          onComplete={handleComplete}
          text={`미래의 이름은 코드입니다.\n데이터 속에서 정의됩니다. 당신의 이름을 코드로
변환하여, 시스템에 맞는 정체성으로 변환됩니다.`}
        />
      </p>

      <NextButton />
    </div>
  );
}
