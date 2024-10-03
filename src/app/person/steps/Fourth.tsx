// src/components/Third.jsx

"use client";

import { useCallback, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useRecoilState } from "recoil";
import { userName } from "../atoms/atoms";
import NextButton from "../components/NextButton";

export default function Fourth() {
  const [isComplete, setIsComplete] = useState(false);
  const [user, setUser] = useRecoilState(userName);
  const [newFirstName, setNewFirstName] = useState("");

  const handleComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFirstName(e.target.value);
  };

  const handleUpdate = () => {
    setUser((prevUser) => ({
      ...prevUser,
      firstName: newFirstName,
    }));
    setNewFirstName("");
  };

  return (
    <div>
      <p className="absolute left-9 top-[380px] text-[#02FE00] text-[32px] text-center w-[760px]">
        <TypeAnimation
          sequence={[
            "성을 입력하십시오. 이 작업은 과거의 흔적을 반영하는 절차일 뿐입니다. 데이터 수집을 완료하겠습니다.",
          ]}
          wrapper="span"
          speed={5}
          style={{ display: "inline-block", whiteSpace: "pre-line" }}
        />
      </p>

      <input
        value={newFirstName}
        onChange={handleChange}
        className="absolute bg-[#242424B2] text-center left-[102px] top-[510px] text-[35px] text-[#02FE00]  w-[645px] py-4"
      />

      <NextButton action={handleUpdate} />
    </div>
  );
}
