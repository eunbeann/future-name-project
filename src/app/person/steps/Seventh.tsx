// Sixth.tsx
"use client";

import { convertToUnicode } from "@/hooks/changeToUni";
import { useEffect, useState } from "react";
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
  const [names, setNames] = useState<UserNamesType[]>([]);

  useEffect(() => {
    const storedNames = localStorage.getItem("userNames");
    if (storedNames) {
      try {
        const parsedNames: UserNamesType[] = JSON.parse(storedNames);
        setNames(parsedNames);
      } catch (error) {
        console.error(
          "로컬스토리지에서 userNames를 파싱하는 데 실패했습니다:",
          error
        );
      }
    }
  }, []);

  const uniFistName = convertToUnicode(name.firstName);
  const uniLastName = convertToUnicode(name.lastName);

  const saveNameInArray = () => {
    const newEntry: UserNamesType = {
      id: Date.now(),
      firstName: name.firstName,
      lastName: name.lastName,
      futureFirstName: uniFistName,
      futureLastName: uniLastName,
      date: new Date().toISOString(),
    };

    const updatedNames = [...names, newEntry];
    setNames(updatedNames);
    localStorage.setItem("userNames", JSON.stringify(updatedNames));
  };

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

      <NextButton action={saveNameInArray} />
    </div>
  );
}
