import loadingLogo from "@/app/assets/gif/loadingLogo.gif";
import blueWorldBg from "@/app/assets/image/blueWorldBg.jpg";
import ComputerMonitor from "@/app/common/ComputerMonitor";
import Image from "next/image";
import Link from "next/link";

export default function WhitePc() {
  return (
    <>
      <Image className="w-full h-[100vh]" src={blueWorldBg} alt="background" />
      <ComputerMonitor>
        {/* TODO: 이미지  */}
        <Image
          className="w-[280px] pb-[35px] xl:w-[500px]"
          src={loadingLogo}
          alt="movingLogo"
        />
        <div className="flex xl:gap-[20px] xl:text-[28px] text-center font-dunggeunmo">
          <Link href="" className="xl:px-[36px] bg-[#ffffff]">
            들어가기
          </Link>
          <Link href="/person" className="xl:px-[36px] bg-[#ffffff]">
            개명하기
          </Link>
        </div>
      </ComputerMonitor>
    </>
  );
}
