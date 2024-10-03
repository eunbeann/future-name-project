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
      <p className="absolute left-9 top-[380px] text-[#02FE00] text-[32px] text-center w-[760px]">
        <TypeAnimation
          sequence={[
            "이름 분석 중... 결과 도출 중... \n이름은 과거와 미래를 잇는 데이터입니다.\n변환을 시작합니다.",
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
