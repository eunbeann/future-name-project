"use client";

import { useRecoilValue } from "recoil";
import { archiveNumber } from "./atoms/atom";
import Archive2 from "./step/Archive2";
import Archive3 from "./step/Archive3";

const stepComponents = {
  0: <Archive2 />,
  1: <Archive3 />,
};

export default function ArchivePage() {
  const step = useRecoilValue(archiveNumber) as keyof typeof stepComponents;

  return <div>{stepComponents[step]}</div>;
}
