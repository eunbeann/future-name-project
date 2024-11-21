"use client";

import loadingLogo from "@/app/assets/gif/loadingLogo.gif";
import x from "@/app/assets/icon/X.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DeniedPage() {
  const [password, setPassword] = useState<string[]>([]);
  const [complete, setComplete] = useState(Boolean);

  const shakeAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1], // 커졌다가 원래 크기로 돌아오는 애니메이션
      transition: {
        duration: 0.3, // 애니메이션 주기
        repeat: 2, // 무한 반복
        ease: "easeInOut", // 부드러운 애니메이션
      },
    },
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (password.length < 6 && /^[a-zA-Z0-9]$/.test(key)) {
        setPassword((prev) => [...prev, key]);
      }

      if (password.length === 5) {
        setComplete(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [password]);

  return (
    <>
      {complete && (
        <div className="absolute -top-[200px] -left-[200px] w-[100vw] h-[100vh] bg-[#000000] bg-opacity-60 z-50 flex justify-center items-center">
          <div
            className="text-[#FFF] font-dunggeunmo text-[200px] border-[7px] border-[#ff0000] px-[5rem] bg-[#000000]"
            style={{
              WebkitTextStrokeWidth: "8px",
              WebkitTextStrokeColor: "#ff0000",
              boxShadow: "0px 0px 26.115px 0px rgba(255, 0, 0, 0.35)",
            }}
          >
            ACCESS DENIED
          </div>
        </div>
      )}
      <div className="flex flex-col gap-[12px] w-full h-[100%] justify-center items-center align-middle">
        <Image
          className="xl:w-[560px] flex"
          src={loadingLogo}
          alt="loadingLogo"
        />
        <p className="text-[40px] text-[#FFF] font-dunggeunmo [text-shadow:0px_0px_28.1px_#02FE00]">
          USER:
        </p>
        <p className="text-[80px] text-[#02FE00] font-dunggeunmo [text-shadow:0px_0px_28.1px_#02FE00]">
          BC15 C9C0 D604
        </p>
        <motion.div
          className="flex flex-col justify-center items-center px-[6rem] py-[2.3rem] border-[3px] border-[#ffffff]"
          style={{ backgroundColor: "rgba(181, 181, 181, 0.3)" }}
          {...(complete ? shakeAnimation : {})}
        >
          <p className="text-[40px] text-[#FFF] font-dunggeunmo [text-shadow:0px_0px_28.1px_#02FE00]">
            PASSWORD
          </p>
          <ul className="flex gap-[18px] ">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <li
                  key={index}
                  className="border-4 border-[#02FE00] w-[120px] h-[120px] flex items-center justify-center text-[#02FE00] text-[40px]"
                >
                  {password[index] && (
                    <Image className="w-[60%] h-[60%]" src={x} alt="x" />
                  )}
                </li>
              ))}
          </ul>
        </motion.div>
        <div className="text-[#ffffff] flex gap-20 text-[28px]">
          <p>M_002/CD3/32</p>
          <p>DATA/FDDSF/23425</p>
          <p>DPU</p>
          <p>C:/DSFDF</p>
        </div>
      </div>
    </>
  );
}
