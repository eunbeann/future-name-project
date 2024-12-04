"use client";

import NeonDialog from "@/app/common/NeonDialog";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useSetRecoilState } from "recoil";
import { stepNumbers, userName } from "../atoms/atoms";

// Fourth.tsx
export default function Fourth() {
  const setUser = useSetRecoilState(userName);
  const [newLastName, setNewLastName] = useState("");
  const setStep = useSetRecoilState(stepNumbers);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLastName(e.target.value);
  };

  const handleUpdate = (e?: React.FormEvent) => {
    e?.preventDefault(); // 폼 제출 기본 동작 방지
    if (isUpdating) return;
    setIsUpdating(true);
    if (newLastName === "") {
      alert("성을 입력해주세요.");
      setIsUpdating(false); // 업데이트 실패 시 플래그 리셋
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        lastName: newLastName,
      }));
      setNewLastName("");
      setStep((prevStep) => prevStep + 1);
      setIsUpdating(false); // 업데이트 완료 후 플래그 리셋
    }
  };

  return (
    <NeonDialog action={handleUpdate}>
      <form onSubmit={handleUpdate}>
        <p className="font-dunggeunmo text-[18px] xl:text-[26px] text-[#000000]">
          <TypeAnimation
            sequence={["성을 입력하십시오."]}
            wrapper="span"
            speed={5}
            style={{
              display: "block",
              whiteSpace: "pre-line",
              color: "black",
            }}
          />
        </p>

        <input
          value={newLastName}
          onChange={handleChange}
          className="bg-[#000] rounded-[8px] text-center text-[18px] font-dunggeunmo text-[#02FE00]  w-[245px] my-2 py-2 mt-[12px] xl:w-[490px] xl:h-[60px] xl:text-[26px] xl:mt-[24px]"
        />
      </form>
    </NeonDialog>
  );
}
