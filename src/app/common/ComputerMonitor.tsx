import blackMonitor from "@/app/assets/icon/blackMonitor.png";
import monitor from "@/app/assets/icon/computerMonitor.png";
import Image from "next/image";

export default function ComputerMonitor({
  children,
  black,
}: {
  children?: React.ReactNode;
  black?: boolean;
}) {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center absolute top-[80px] left-[70px] w-[460px] h-[340px] xl:top-[150px] xl:left-[120px] xl:w-[880px] xl:h-[650px]">
        {children}
      </div>
      {black ? (
        <Image
          className="h-[80vh] w-[600px] xl:h-[70vh] xl:w-[100%]"
          src={blackMonitor}
          alt="blackMonitor"
        />
      ) : (
        <Image
          className="h-[80vh] w-[600px] xl:h-[90vh] xl:w-[100%]"
          src={monitor}
          alt="monitor"
        />
      )}
    </div>
  );
}
