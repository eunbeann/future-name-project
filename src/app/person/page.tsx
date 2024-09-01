"use client";

import personBox from "@/app/assets/image/personBox.png";
import Image from "next/image";
import { useState } from "react";
import Button from "./components/Button";

export default function PersonPage() {
  const [progress, SetProgress] = useState(0);

  const onClickNext = () => {
    if (progress === 6) {
      SetProgress(0);
    } else {
      SetProgress(progress + 1);
    }
  };

  interface TextArrayType {
    hasButton: number;
    text: string;
  }

  const textArray: TextArrayType[] = [
    {
      hasButton: 0,
      text: "안녕하세요. 퓨네이밍센터에 \n 오신 것을 환영합니다.",
    },
    {
      hasButton: 0,
      text: "퓨처네이밍센터는 미래의 유행할 이름을 미리 지어보는 가상의 작명소입니다.\n당신의 고유한 이름을 인공지능 기술을 통해 특별한 \n 코드 이름으로 변환해 드리겠습니다.",
    },
    {
      hasButton: 1,
      text: "먼저, 당신의 성을 입력해 주세요.",
    },
    {
      hasButton: 1,
      text: "확인했습니다! 이름을 입력해주세요.",
    },
    {
      hasButton: 0,
      text: "변환중...",
    },
    {
      hasButton: 0,
      text: "변환이 완료되었습니다!\n당신의 새로운 이름은 [AE40 BBFC C900]입니다.",
    },
    {
      hasButton: 2,
      text: "개명신청서를 받으시겠습니까?",
    },
  ];

  return (
    <div className=" flex justify-center items-center text-white">
      <div className="relative">
        <Image
          className="z-30 w-300 h-200"
          src={personBox}
          alt="introBackground"
        />
        <p
          onClick={onClickNext}
          className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] whitespace-pre-line text-center w-[760px]"
        >
          {textArray[progress].text}
        </p>
        <Button hasButton={textArray[progress].hasButton} />
      </div>
    </div>
  );
}
