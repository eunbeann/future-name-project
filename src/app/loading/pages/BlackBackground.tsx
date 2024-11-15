import blueWorldBg from "@/app/assets/image/blueBackComputer.png";
import ComputerMonitor from "@/app/common/ComputerMonitor";
import Image from "next/image";

export default function BlackBackground() {
  return (
    <>
      <Image className="w-full h-[100vh]" src={blueWorldBg} alt="background" />
      <ComputerMonitor></ComputerMonitor>
    </>
  );
}
