"use client";

import { useRecoilValue } from "recoil";
import { stepNumbers, userName } from "./atoms/atoms";
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
};

export default function PersonPage() {
  const step = useRecoilValue(stepNumbers) as keyof typeof stepComponents;
  const userNames = useRecoilValue(userName);

  console.log(userNames);

  return <div>{stepComponents[step]}</div>;
}
