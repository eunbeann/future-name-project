"use client";

import playBtn from "@/app/assets/gif/playBtn.gif";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilState } from "recoil";
import { stepNumbers } from "../person/atoms/atoms";
import { sendingNumber } from "../sending/atoms/atom";
import { storyNumbers } from "../story/atoms/atoms";

export default function NeonDialog({
  children,
  action,
  story,
  sending,
}: {
  children?: React.ReactNode;
  action?: () => void;
  story?: boolean;
  sending?: boolean;
}) {
  const [step, setStep] = useRecoilState(stepNumbers);
  const [storyStep, setStoryStep] = useRecoilState(storyNumbers);
  const [sendingStep, setSendingStep] = useRecoilState(sendingNumber);
  const router = useRouter();

  const onClickButton = () => {
    if (action) {
      action();
    } else {
      if (story) {
        if (storyStep !== 4) {
          setStoryStep((prevStep) => prevStep + 1);
        } else if (storyStep === 4) {
          router.push("/lobby");
        }
      } else if (sending) {
        if (storyStep !== 4) {
          setSendingStep((prevStep) => prevStep + 1);
        } else if (sendingStep === 4) {
          router.push("/archive");
        }
      } else {
        if (step !== 8) {
          setStep((prevStep) => prevStep + 1);
        }
      }
    }
  };

  // TODO: input 있을 경우엔 그냥 뒤로 가도 되게
  const onCBackButton = () => {
    if (story) {
      if (storyStep !== 0) {
        setStoryStep((prevStep) => prevStep - 1);
      } else if (storyStep === 0) {
        router.back();
      }
    } else {
      if (step !== 1) {
        setStep((prevStep) => prevStep - 1);
      } else if (step === 1) {
        router.push("lobby");
      }
    }
    if (action) {
      action();
    }
  };

  const dialogVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <>
      <motion.div
        variants={dialogVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-[#02FE00] w-[90%] h-[130px] xl:h-[240px] z-50 flex justify-center items-center rounded-[24px] py-[20px] text-center xl:w-[76%]"
      >
        <div className="font-dunggeunmo whitespace-pre-wrap">{children}</div>
        <button
          className="absolute right-3 bottom-5 w-fit h-fit p-2"
          onClick={onClickButton}
        >
          <Image
            className="w-[35px] h-[35px] xl:w-[60px] xl:h-[60px]"
            src={playBtn}
            alt="Play Button"
            priority
          />
        </button>
        {sending ||
          (storyStep !== 1 && (
            <button
              className="absolute left-3 bottom-5 w-fit h-fit p-2 scale-x-[-1]"
              onClick={onCBackButton}
            >
              <Image
                className="w-[35px] h-[35px] xl:w-[60px] xl:h-[60px]"
                src={playBtn}
                alt="Back Button"
                priority
              />
            </button>
          ))}
        {story && (
          <button
            onClick={() => router.push("lobby")}
            className="font-dunggeunmo absolute right-0 -bottom-[65px] w-fit h-fit p-2 text-[30px] text-[#02FE00]"
          >
            대화 스킵
          </button>
        )}
      </motion.div>
    </>
  );
}
