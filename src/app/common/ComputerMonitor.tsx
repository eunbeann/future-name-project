import monitor from "@/app/assets/icon/computerMonitor.png";
import Image from "next/image";

export default function ComputerMonitor({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <div className="absolute top-[80px] left-[70px] w-[440px] h-[340px]">
        {children}
      </div>
      <Image className="h-[80vh] w-[40vw]" src={monitor} alt="monitor" />
    </div>
  );
}
