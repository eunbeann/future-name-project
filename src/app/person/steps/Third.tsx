"use client";

import { useCallback, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import NextButton from "../components/NextButton";

export default function Third() {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  return (
    <div>
      <p className="absolute left-9 top-[380px] text-[#02FE00] text-[32px] text-center w-[760px]">
        <TypeAnimation
          sequence={[
            "미래의 이름은 코드입니다.\n데이터 속에서 정의됩니다. 당신의 이름을 코드로 변환하여, 시스템에 맞는 정체성으로 변환됩니다.",
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
