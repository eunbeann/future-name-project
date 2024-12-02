import loadingLogo from "@/app/assets/gif/loadingLogo.gif";
import blueWorldBg from "@/app/assets/image/blueWorldBg.png";
import ComputerMonitor from "@/app/common/ComputerMonitor";
import Image from "next/image";
import Link from "next/link";

export default function WhitePc() {
  return (
    <>
      <Image
        className="w-[100vw] h-[100vh]"
        src={blueWorldBg}
        alt="background"
      />
      <ComputerMonitor color="white">
        <Image
          className="w-[320px] mb-[20px] xl:w-[600px]"
          src={loadingLogo}
          alt="movingLogo"
        />
        <div className="flex gap-[15px] xl:gap-[20px] xl:text-[28px] text-center font-dunggeunmo">
          <Link href="/loading" className="xl:px-[36px] px-[12px] bg-[#ffffff]">
            들어가기
          </Link>
          <Link href="/person" className="xl:px-[36px] px-[12px] bg-[#ffffff]">
            개명하기
          </Link>
        </div>
      </ComputerMonitor>
    </>
  );
}
