"use client";

import { useRecoilValue } from "recoil";
import { storyNumbers } from "./atoms/atoms";
import Story1 from "./steps/Story1";
import Story2 from "./steps/Story2";
import Story3 from "./steps/Story3";
import Story4 from "./steps/Story4";

const stepComponents = {
  1: <Story1 />,
  2: <Story2 />,
  3: <Story3 />,
  4: <Story4 />,
};

export default function StoryPage() {
  const step = useRecoilValue(storyNumbers) as keyof typeof stepComponents;

  return <div>{stepComponents[step]}</div>;
}
