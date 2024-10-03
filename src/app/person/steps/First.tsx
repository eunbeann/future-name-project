"use client";

import { useCallback, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import NextButton from "../components/NextButton";

export default function First() {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  return (
    <div>
      <p className="absolute left-9 top-[380px] text-[#02FE00] text-[32px] text-center w-[760px]">
        <TypeAnimation
          sequence={[
            "퓨처네이밍센터에 오신 것을 환영합니다. \n 당신의 이름은 더 이상 단순한 텍스트가 아닙니다.\n 시스템에 최적화된 코드로 변환될 것입니다.",
          ]}
          wrapper="span"
          speed={5}
          style={{ display: "inline-block", whiteSpace: "pre-line" }}
        />
      </p>
      <NextButton />
    </div>
  );
}
