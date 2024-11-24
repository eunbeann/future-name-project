"use client";

import { useRecoilValue } from "recoil";
import { archiveNumber } from "./atoms/atom";
import Archive1 from "./step/Archive1";
import Archive2 from "./step/Archive2";
import Archive3 from "./step/Archive3";
import Archive4 from "./step/Archive4";
import Archive5 from "./step/Archive5";
import Archive6 from "./step/Archive6";

const stepComponents = {
  0: <Archive1 />,
  1: <Archive2 />,
  2: <Archive3 />,
  3: <Archive4 />,
  4: <Archive5 />,
  5: <Archive6 />,
};

export default function ArchivePage() {
  const step = useRecoilValue(archiveNumber) as keyof typeof stepComponents;

  return <div className="h-full">{stepComponents[step]}</div>;
}
