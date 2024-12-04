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
        <div className="w-[85vw] h-[80vh] relative">
          <div className="flex gap-[15px] rounded-t-[12px] border border-[#ffffff] bg-[#ffffff] h-[42px] xl:h-[64px] pl-[30px] items-center">
            <Image
              className="h-[29px] xl:h-[48px] w-auto"
              src={headerLogo}
              alt="logo"
            />
            <Image
              className="h-[14px] xl:h-[23px] w-auto"
              src={headerName}
              alt="fnc.com"
            />
          </div>
          <div className="rounded-b-[24px] border border-[#ffffff] relative">
            <div className="absolute inset-0 rounded-b-[24px] ">{children}</div>
            {bgImage && (
              <Image
                className="w-full h-full rounded-b-[24px]"
                src={bgImage}
                alt="lobbyBg"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[10px] ml-[9px]">
          <Link
            href={"/project"}
            className="w-[78px] h-[78px] xl:w-[120px] xl:h-[120px]"
          >
            <Image src={project} alt="projectIcon" />
          </Link>
          <Link
            href={"/code"}
            className="w-[78px] h-[78px] xl:w-[120px] xl:h-[120px]"
          >
            <Image src={code} alt="codeIcon" />
          </Link>
          <Link
            href={"/list"}
            className="w-[78px] h-[78px] xl:w-[120px] xl:h-[120px]"
          >
            <Image src={aiList} alt="AlListIcon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
