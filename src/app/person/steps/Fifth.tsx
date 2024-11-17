"use client";

import NeonDialog from "@/app/common/NeonDialog";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { stepNumbers, userName } from "../atoms/atoms";

export default function Fifth() {
  const [user, setUser] = useRecoilState(userName);
  const [newFirstName, setNewFirstName] = useState("");
  const setStep = useSetRecoilState(stepNumbers);

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

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setStep((prevStep) => prevStep + 1);
      handleUpdate();
    }
  };

  return (
    <NeonDialog action={handleUpdate}>
      <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
        <TypeAnimation
          sequence={["이름을 입력하십시오."]}
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
        value={newFirstName}
        onChange={handleChange}
        onKeyDown={handleEnter}
        className="bg-[#000] rounded-[8px] text-center text-[18px] font-dunggeunmo text-[#02FE00] w-[245px] my-2 py-2 mt-[12px] xl:w-[490px] xl:h-[60px] xl:text-[32px] xl:mt-[24px]"
      />
    </NeonDialog>
  );
}
