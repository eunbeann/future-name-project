import aiList from "@/app/assets/icon/aiListIcon.png";
import code from "@/app/assets/icon/codeIcon.png";
import headerLogo from "@/app/assets/icon/headerLogo.png";
import headerName from "@/app/assets/icon/headerName.png";
import project from "@/app/assets/icon/projectIcon.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function MainContainer({
  children,
  bgImage,
}: {
  children: React.ReactNode;
  bgImage?: StaticImageData;
}) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex">
        <div className="w-[80vw] h-[80vh] relative">
          <div className="flex gap-[16px] rounded-t-[12px] bg-[#ffffff] h-[42px] pl-[30px] items-center">
            <Image src={headerLogo} alt="logo" />
            <Image src={headerName} alt="fnc.com" />
          </div>
          <div className="h-full rounded-b-[12px] border border-[#ffffff] relative">
            {bgImage && (
              <Image className="w-full h-full" src={bgImage} alt="lobbyBg" />
            )}
            <div className="absolute inset-0">{children}</div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] ml-[9px]">
          <Link href={"/list"} className="w-[78px] h-[78px]">
            <Image src={project} alt="projectIcon" />
          </Link>
          <Link href={"/list"} className="w-[78px] h-[78px]">
            <Image src={code} alt="codeIcon" />
          </Link>
          <Link href={"/list"} className="w-[78px] h-[78px]">
            <Image src={aiList} alt="AlListIcon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
