import blueWorldBg from "@/app/assets/image/blueWorldBg.jpg";
import ComputerMonitor from "@/app/common/ComputerMonitor";
import Image from "next/image";
export default function SkyPc1() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#000000]" />
      <ComputerMonitor color="black">
        <Image
          className="w-full xl:w-full"
          src={blueWorldBg}
          alt="blueWorldBg"
        />
      </ComputerMonitor>
    </>
  );
}
