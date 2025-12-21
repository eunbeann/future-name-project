import blackMonitor from "@/app/assets/icon/blackMonitor.png";
import whiteMonitor from "@/app/assets/icon/computerMonitor.png";
import skyMonitor from "@/app/assets/icon/skyMonitor.png";
import Image from "next/image";

const monitorColor = {
  sky: skyMonitor,
  black: blackMonitor,
  white: whiteMonitor,
};

export default function ComputerMonitor({
  children,
  color,
}: {
  children?: React.ReactNode;
  color: "sky" | "black" | "white";
}) {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center justify-center absolute top-[130px] left-[120px] w-[770px] h-[590px]">
        {children}
      </div>
      <Image
        className="h-[1200px] w-auto"
        src={monitorColor[color]}
        alt="kMonitor"
      />
    </div>
  );
}
