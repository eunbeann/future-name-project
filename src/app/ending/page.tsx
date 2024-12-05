import loadingLogo from "@/app/assets/gif/loadingLogo.gif";
import whiteMonitor from "@/app/assets/icon/computerMonitor.png";
import endingBg from "@/app/assets/image/endingBg.png";
import Image from "next/image";
import Link from "next/link";

export default function EndingPage() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Image className="w-full h-full" src={endingBg} alt="background" />

      <div className="absolute top-[440px] left-[880px] inset-0 flex flex-col items-center justify-center z-50 w-[810px] h-[600px] bg-mauve3">
        <Image
          className="w-[320px] xl:w-[600px] z-50"
          src={loadingLogo}
          alt="movingLogo"
        />
        <Link
          href="/"
          className="xl:px-[152px] text-[40px] bg-[#ffffff] font-dunggeunmo "
        >
          END
        </Link>
      </div>

      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#000000] bg-opacity-60 z-40" />

      <div className="absolute bottom-0 w-full flex justify-center z-30 overflow-hidden">
        <Image
          className="h-[20%] w-[40%] -mb-[160px]"
          src={whiteMonitor}
          alt="blackMonitor"
        />
      </div>
    </div>
  );
}
