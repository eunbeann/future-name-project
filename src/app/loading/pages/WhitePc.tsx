import loadingLogo from "@/app/assets/gif/loadingLogo.gif";
import blueWorldBg from "@/app/assets/image/blueWorldBg.jpg";
import ComputerMonitor from "@/app/common/ComputerMonitor";
import Image from "next/image";

export default function WhitePc() {
  return (
    <>
      <Image className="w-full h-[100vh]" src={blueWorldBg} alt="background" />
      <ComputerMonitor>
        <Image
          className="w-[300px] pt-[20px] pb-[35px]"
          src={loadingLogo}
          alt="movingLogo"
        />
        <button className="font-dunggeunmo bg-[#ffffff] text-center w-[120px]">
          START
        </button>
      </ComputerMonitor>
    </>
  );
}
