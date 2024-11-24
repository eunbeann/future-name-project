import arrow from "@/app/assets/gif/movingArrow.gif";
import denied from "@/app/assets/image/deniedBg.png";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { archiveNumber } from "../atoms/atom";
import ProfileChip from "./components/ProfileChip";

export default function Archive3() {
  const setArchiveStep = useSetRecoilState(archiveNumber);

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
      <button
        onClick={() => {
          setArchiveStep((prev) => prev + 1);
        }}
      >
        <Image
          className="absolute right-[80px] top-1/2 transform -translate-y-1/2 scale-x-[-1] xl:w-[98px] "
          src={arrow}
          alt="arrow"
        />
      </button>
    </>
  );
}
