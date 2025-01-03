"use client";

import movingPerson from "@/app/assets/gif/movingPerosn.gif";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { stepNumbers } from "./atoms/atoms";
import Eight from "./steps/Eight";
import Fifth from "./steps/Fifth";
import First from "./steps/First";
import Fourth from "./steps/Fourth";
import Second from "./steps/Second";
import Seventh from "./steps/Seventh";
import Sixth from "./steps/Sixth";
import Third from "./steps/Third";

const stepComponents = {
  1: <First />,
  2: <Second />,
  3: <Third />,
  4: <Fourth />,
  5: <Fifth />,
  6: <Sixth />,
  7: <Seventh />,
  8: <Eight />,
};

export default function PersonPage() {
  const step = useRecoilValue(stepNumbers) as keyof typeof stepComponents;

  return (
    <div className="flex flex-col items-center justify-center gap-[40px] py-[50px] rounded-b-[24px]">
      <Image
        className="h-[80%] w-[75%]"
        src={movingPerson}
        alt="movingPerson"
      />
      <div className="ml-[400px] w-full">{stepComponents[step]}</div>
    </div>
  );
}
