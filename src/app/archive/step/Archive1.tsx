import denied from "@/app/assets/image/deniedBg.png";
import Image from "next/image";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { archiveNumber } from "../atoms/atom";
import ProfileChip from "./components/ProfileChip";

export default function Archive1() {
  const setArchiveStep = useSetRecoilState(archiveNumber);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArchiveStep((step) => step + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Image
        alt="bg"
        src={denied}
        className="absolute w-full h-full  rounded-b-[24px]"
      />
      <div className="w-full h-full flex flex-col flex-wrap justify-center items-center content-center bg-mauve3 rounded-b-[24px] gap-x-[50px] gap-y-[32px] py-[20px]">
        {Array(18)
          .fill(0)
          .map((_, index) => (
            <ProfileChip key={index} />
          ))}
      </div>
    </>
  );
}
