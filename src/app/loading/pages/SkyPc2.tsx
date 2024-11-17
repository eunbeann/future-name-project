import bg from "@/app/assets/image/listBackground.png";
import ComputerMonitor from "@/app/common/ComputerMonitor";
import Image from "next/image";
export default function SkyPc2() {
  return (
    <>
      <Image src={bg} alt="bg" className="w-full h-[100vh] bg-[#000000]" />
      <ComputerMonitor color="sky"></ComputerMonitor>
    </>
  );
}
