"use client";

import NeonDialog from "@/app/common/NeonDialog";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useSetRecoilState } from "recoil";
import { userName } from "../atoms/atoms";

export default function Fourth() {
  const setUser = useSetRecoilState(userName);
  const [newLastName, setNewLastName] = useState("");

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
    <NeonDialog action={handleUpdate}>
      <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
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
        className="bg-[#000] rounded-[8px] text-center text-[18px] font-dunggeunmo text-[#02FE00]  w-[245px] my-2 py-2 mt-[12px] xl:w-[490px] xl:h-[60px] xl:text-[32px]"
      />
    </NeonDialog>
  );
}
