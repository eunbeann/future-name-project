// src/components/Third.jsx

"use client";

import TypingText from "@/app/common/TypingText";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { userName } from "../atoms/atoms";
import NextButton from "../components/NextButton";

export default function Third() {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(false);
  const [user, setUser] = useRecoilState(userName);
  const [newLastName, setNewLastName] = useState("");

  const handleComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLastName(e.target.value);
  };

  const handleUpdate = () => {
    setUser((prevUser) => ({
      ...prevUser,
      lastName: newLastName,
    }));
    setNewLastName("");
  };

  return (
    <div>
      <p className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] whitespace-pre-line text-center w-[760px]">
        <TypingText
          onComplete={handleComplete}
          speed={100}
          text={`먼먼저, 당신의 성을 입력해 주세요.`}
        />
      </p>

      <input
        value={newLastName}
        onChange={handleChange}
        className="absolute bg-[#242424B2] text-center left-[102px] top-[510px] text-[35px] text-[#02FE00]  w-[645px] py-4"
      />

      <NextButton action={handleUpdate} />
    </div>
  );
}
