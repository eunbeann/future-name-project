// Sixth.tsx
"use client";

import TypingText from "@/app/common/TypingText";
import { convertToUnicode } from "@/hooks/changeToUni";
import { useEffect, useState } from "react";
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

  const uniFistName = convertToUnicode(name.firstName);
  console.log("uniFistName", uniFistName);
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

  console.log("uniLastName", uniLastName);
  console.log("uniFistName", uniFistName);

  return (
    <div>
      <p className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] whitespace-pre-line text-center w-[760px]">
        <TypingText
          onComplete={handleComplete}
          text={`변변환이 완료되었습니다! \n 당신의 새로운 이름은 \n  [${uniLastName}${uniFistName}]입니다.`}
        />
      </p>

      <NextButton action={saveNameInArray} />
    </div>
  );
}
