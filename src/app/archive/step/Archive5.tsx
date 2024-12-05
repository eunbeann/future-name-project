import hackerText from "@/app/assets/gif/hackerText.gif";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { archiveNumber } from "../atoms/atom";

export default function Archive5() {
  const [archiveStep, setArchiveStep] = useRecoilState(archiveNumber);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArchiveStep((step) => step + 1);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Image
      className="w-full h-[79.5vh] rounded-b-[24px]"
      src={hackerText}
      alt="background"
    />
  );
}
