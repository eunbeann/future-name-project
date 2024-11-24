import fakeProfile from "@/app/assets/image/fakeProfile1.png";
import Image from "next/image";

export default function ProfileChip() {
  return (
    <div className="relative w-[210px] h-[320px]">
      <div className="absolute inset-0 bg-[#02FE00] clip-diagonal" />
      <div className="absolute inset-[4px] clip-diagonal flex flex-col">
        <Image
          src={fakeProfile}
          alt="Profile"
          layout="fill"
          objectFit="cover"
        />
        {/* TODO: 폰트 변경 */}
        <div className="absolute bottom-0 left-0 w-full text-center  bg-[#000000] text-[#02FE00] text-[18px] font-pixardisplay px-2 py-1">
          C720 D604 C815
        </div>
      </div>
    </div>
  );
}
