"use client";

import movingPerson from "@/app/assets/gif/movingPerosn.gif";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useRecoilState } from "recoil";
import { userName } from "../atoms/atoms";

export default function Fourth() {
  const [user, setUser] = useRecoilState(userName);
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
    <div className="flex flex-col items-center gap-[40px]">
      <Image className="h-[400px]" src={movingPerson} alt="movingPerson" />
      <NeonDialog action={handleUpdate}>
        <p className="font-dunggeunmo text-center text-[18px] text-[#000000]">
          <TypeAnimation
            sequence={["성을 입력하십시오. "]}
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
          className="bg-[#000] rounded-[8px] text-center text-[18px] font-dunggeunmo text-[#02FE00]  w-[245px] my-2 py-2"
        />
      </NeonDialog>
    </div>
  );
}
