import headerLogo from "@/app/assets/icon/headerLogo.png";
import headerName from "@/app/assets/icon/headerName.png";
import Image from "next/image";

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center">
        <div className="w-[80vw] h-[80vh]">
          <div className="flex gap-[16px] rounded-t-[12px] bg-[#ffffff] h-[42px] pl-[30px] items-center">
            <Image src={headerLogo} alt="logo" />
            <Image src={headerName} alt="fnc.com" />
          </div>
          <div className="h-full rounded-b-[12px] border border-[#ffffff]">
            {children}
          </div>
        </div>
        <div>
          <div>button1</div>
          <div>button2</div>
          <div>button3</div>
        </div>
      </div>
    </div>
  );
}
