"use client";

import { useRecoilValue } from "recoil";
import { sendingNumber } from "./atoms/atom";
import Sending1 from "./steps/Sending1";
import Sending2 from "./steps/Sending2";
import Sending3 from "./steps/Sending3";

const stepComponents = {
  0: <Sending1 />,
  1: <Sending2 />,
  2: <Sending3 />,
};

export default function StoryPage() {
  const step = useRecoilValue(sendingNumber) as keyof typeof stepComponents;

  return <div>{stepComponents[step]}</div>;
}
