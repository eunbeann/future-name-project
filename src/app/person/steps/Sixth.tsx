// Sixth.tsx
"use client";

import TypingText from "@/app/common/TypingText";
import { convertToUnicode } from "@/hooks/changeToUni";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userName } from "../atoms/atoms";
import NextButton from "../components/NextButton";

interface UserName {
  lastName: string;
  firstName: string;
}

interface UserNamesType {
  id: number;
  futureName: string;
  date: string; // localStorage는 Date 객체를 저장할 수 없으므로 문자열로 저장
}

export default function Sixth() {
  const [isComplete, setIsComplete] = useState(false);
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

  const handleComplete = () => {
    setIsComplete(true);
  };

  const newName = convertToUnicode(`${name.lastName}${name.firstName}`);

  const saveNameInArray = () => {
    const newEntry: UserNamesType = {
      id: Date.now(),
      futureName: newName,
      date: new Date().toISOString(),
    };

    const updatedNames = [...names, newEntry];
    setNames(updatedNames);
    localStorage.setItem("userNames", JSON.stringify(updatedNames));
  };

  return (
    <div>
      <p className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] whitespace-pre-line text-center w-[760px]">
        <TypingText
          onComplete={handleComplete}
          speed={100}
          text={`변변환이 완료되었습니다! \n 당신의 새로운 이름은 \n  [${newName}]입니다.`}
        />
      </p>

      <NextButton action={saveNameInArray} />
    </div>
  );
}
