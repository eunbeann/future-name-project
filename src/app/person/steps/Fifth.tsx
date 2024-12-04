"use client";

import NeonDialog from "@/app/common/NeonDialog";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { stepNumbers, userName } from "../atoms/atoms";

export default function Fifth() {
  const [user, setUser] = useRecoilState(userName);
  const [newFirstName, setNewFirstName] = useState("");
  const setStep = useSetRecoilState(stepNumbers);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFirstName(e.target.value);
  };

  const handleUpdate = () => {
    if (newFirstName === "") {
      alert("이름을 입력해주세요.");
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        firstName: newFirstName,
      }));
      setNewFirstName("");
      setStep((prevStep) => prevStep + 1);
    }
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <NeonDialog action={handleUpdate}>
      <p className="font-dunggeunmo text-[18px] xl:text-[26px] text-[#000000]">
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
        ref={nameRef}
        value={newFirstName}
        onChange={handleChange}
        onKeyDown={handleEnter}
        className="bg-[#000] rounded-[8px] text-center text-[18px] font-dunggeunmo text-[#02FE00] w-[245px] my-2 py-2 mt-[12px] xl:w-[490px] xl:h-[60px] xl:text-[26px] xl:mt-[24px]"
      />
    </NeonDialog>
  );
}
