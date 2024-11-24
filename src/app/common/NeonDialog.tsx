"use client";

import playBtn from "@/app/assets/gif/playBtn.gif";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { archiveNumber } from "../archive/atoms/atom";
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
  const [archiveStep, setArchiveStep] = useRecoilState(archiveNumber);
  const [currentFlow, setCurrentFlow] = useState("default");

  useEffect(() => {
    console.log(step, storyStep, sendingStep, archiveStep);
  }, [step, storyStep, sendingStep, archiveStep]);

  useEffect(() => {
    if (story) {
      setCurrentFlow("story");
    } else if (sending) {
      setCurrentFlow("sending");
    } else if (archiveStep > 0) {
      setCurrentFlow("archive");
    } else {
      setCurrentFlow("default");
    }
  }, [story, sending, archiveStep]);

  const router = useRouter();

  const onClickButton = () => {
    if (action) {
      action();
    } else {
      switch (currentFlow) {
        case "story":
          if (storyStep < 4) {
            setStoryStep(storyStep + 1);
          } else {
            router.push("/lobby");
          }
          break;
        case "sending":
          if (sendingStep < 4) {
            setSendingStep(sendingStep + 1);
          } else {
            router.push("/archive");
          }
          break;
        case "archive":
          // archive 플로우에 대한 로직 추가
          break;
        default:
          if (step < 9) {
            setStep(step + 1);
          } else {
            router.push("/lobby");
          }
          break;
      }
    }
  };

  const onCBackButton = () => {
    switch (currentFlow) {
      case "archive":
        if (archiveStep > 0) {
          setArchiveStep(archiveStep - 1);
        } else {
          router.back();
        }
        break;
      case "story":
        if (storyStep > 0) {
          setStoryStep(storyStep - 1);
        } else {
          router.back();
        }
        break;
      case "sending":
        if (sendingStep > 0) {
          setSendingStep(sendingStep - 1);
        } else {
          router.back();
        }
        break;
      default:
        if (step > 0) {
          setStep(step - 1);
        } else {
          router.push("lobby");
        }
        break;
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
