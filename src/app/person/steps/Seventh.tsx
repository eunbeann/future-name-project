// Sixth.tsx
"use client";

import { convertToUnicode } from "@/hooks/changeToUni";
import { TypeAnimation } from "react-type-animation";
import { useRecoilValue } from "recoil";
import { userName } from "../atoms/atoms";
import NextButton from "../components/NextButton";

interface UserNamesType {
  id: number;
  firstName: string;
  lastName: string;
  futureFirstName: string;
  futureLastName: string;
  date: string;
}

export default function Seventh() {
  const name = useRecoilValue(userName);

  const uniFistName = convertToUnicode(name.firstName);
  const uniLastName = convertToUnicode(name.lastName);

  return (
    <div>
      <p className="absolute left-9 top-[380px] font-dunggeunmo text-[#02FE00] text-[32px] text-center w-[760px]">
        <TypeAnimation
          sequence={[
            `변환 완료. 당신의 이름은 이제 [${uniLastName} ${uniFistName}]입니다.\n이 코드는 당신의 정체성을 데이터로 표현한 것입니다.`,
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
