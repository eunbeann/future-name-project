import fakeList from "@/app/assets/icon/fakeLists.png";
import denied from "@/app/assets/image/deniedBg.png";
import Image from "next/image";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { archiveNumber } from "../atoms/atom";

export default function Archive3() {
  const setArchiveStep = useSetRecoilState(archiveNumber);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArchiveStep((step) => step + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="h-full w-full flex justify-end items-center">
        <Image
          alt="fakeList"
          src={fakeList}
          className="w-[90%] h-[90%] mr-[50px] z-50"
        />
        <Image
          alt="bg"
          src={denied}
          className="absolute w-full h-full rounded-b-[24px]"
        />
      </div>
    </>
  );
}
