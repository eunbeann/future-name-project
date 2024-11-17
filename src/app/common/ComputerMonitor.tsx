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
      <div className="flex flex-col items-center justify-center absolute top-[40px] left-[70px] w-[460px] h-[340px] xl:top-[150px] xl:left-[120px] xl:w-[880px] xl:h-[580px]">
        {children}
      </div>
      <Image
        width={600}
        height={400}
        className="h-[80vh] w-[600px] xl:h-[90vh] xl:w-[100%]"
        src={monitorColor[color]}
        alt="blackMonitor"
      />
    </div>
  );
}
