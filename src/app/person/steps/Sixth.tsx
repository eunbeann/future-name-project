"use client";

import NeonDialog from "@/app/common/NeonDialog";
import { convertToUnicode } from "@/hooks/changeToUni";
import { push, ref, set } from "firebase/database";
import { TypeAnimation } from "react-type-animation";
import { useRecoilValue } from "recoil";
import { db } from "../../../../firebase/firebasedb";
import { userName } from "../atoms/atoms";

export default function Sixth() {
  const name = useRecoilValue(userName);

  const uniFirstName = convertToUnicode(name.firstName);
  const uniLastName = convertToUnicode(name.lastName);

  const saveNameInArray = () => {
    const reference = ref(db, "users");
    const newUserRef = push(reference);

    set(newUserRef, {
      firstName: name.firstName,
      lastName: name.lastName,
      futureFirstName: uniFirstName,
      futureLastName: uniLastName,
      date: new Date().toISOString(),
    });
  };

  return (
    <NeonDialog action={saveNameInArray}>
      <p className="font-dunggeunmo text-[18px] text-[#000000]">
        <TypeAnimation
          sequence={["이름 분석 중... 데이터를 분석 중 입니다."]}
          wrapper="span"
          speed={5}
          style={{
            display: "block",
            whiteSpace: "pre-line",
            color: "black",
          }}
        />
      </p>
    </NeonDialog>
  );
}
