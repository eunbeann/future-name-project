import loadingLogo from "@/app/assets/gif/loadingLogo.gif";
import blueWorldBg from "@/app/assets/image/blueWorldBg.png";
import ComputerMonitor from "@/app/common/ComputerMonitor";
import Image from "next/image";
import Link from "next/link";

export default function WhitePc() {
  return (
    <div className="absolute inset-0 w-[2560px] h-[1333px]">
      <Image
        className="w-full h-full object-cover"
        src={blueWorldBg}
        alt="background"
      />
      <ComputerMonitor color="white">
        <Image
          className="w-[570px] mb-[30px]"
          src={loadingLogo}
          alt="movingLogo"
        />
        <div className="flex gap-[20px] text-[26px] text-center font-dunggeunmo">
          <Link href="/loading" className="px-[36px] bg-[#ffffff]">
            들어가기
          </Link>
          <Link href="/person" className="px-[36px] bg-[#ffffff]">
            개명하기
          </Link>
        </div>
      </ComputerMonitor>
    </div>
  );
}
