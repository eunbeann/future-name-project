"use client";

import { convertToUnicode } from "@/hooks/changeToUni";
import { push, ref, set } from "firebase/database";
import { TypeAnimation } from "react-type-animation";
import { useRecoilValue } from "recoil";
import { db } from "../../../../firebase/firebasedb";
import { userName } from "../atoms/atoms";
import NextButton from "../components/NextButton";

export default function Sixth() {
  const name = useRecoilValue(userName);

  const uniFirstName = convertToUnicode(name.firstName);
  const uniLastName = convertToUnicode(name.lastName);

  const saveNameInArray = () => {
    const reference = ref(db, "users");
    const newUserRef = push(reference); // 고유 키로 새로운 항목 추가

    set(newUserRef, {
      firstName: name.firstName,
      lastName: name.lastName,
      futureFirstName: uniFirstName,
      futureLastName: uniLastName,
      date: new Date().toISOString(),
    });
  };

  return (
    <div>
      <p className="absolute left-9 top-[380px] font-dunggeunmo text-[#02FE00] text-[32px] text-center w-[760px]">
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
