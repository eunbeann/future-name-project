import bg from "@/app/assets/image/listBackground.png";
import ComputerMonitor from "@/app/common/ComputerMonitor";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlackPc2() {
  const router = useRouter();

  const handleAnimationEnd = () => {
    router.push("/story");
  };

  return (
    <>
      <Image src={bg} alt="bg" className="w-full h-[100vh] bg-[#000000]" />
      <ComputerMonitor color="black">
        <h1 className="font-pixardisplay text-[#ffffff] xl:text-[52px] mb-[20px]">
          Loading......
        </h1>
        <div className="flex px-[20px] py-[14px] items-center xl:h-[56px] xl:w-[650px] border-[5px] border-[#ffffff]">
          <div
            className="h-full bg-[#02FE00] animate-expand"
            onAnimationEnd={handleAnimationEnd}
          ></div>
        </div>
      </ComputerMonitor>
    </>
  );
}
