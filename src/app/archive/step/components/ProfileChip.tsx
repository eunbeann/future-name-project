import fakeProfile from "@/app/assets/image/fakeProfile1.png";
import Image from "next/image";
import { useState } from "react";
import ProfileBack from "./ProfileBack";

export default function ProfileChip() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[224px] h-[320px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 기본 ProfileChip */}
      <div className="absolute inset-0 bg-[#02FE00] clip-diagonal" />
      <div className="absolute inset-[4px] clip-diagonal flex flex-col">
        <Image
          src={fakeProfile}
          alt="Profile"
          layout="fill"
          objectFit="cover"
        />
        {/* 하단 텍스트 */}
        <div className="absolute bottom-0 left-0 w-full text-center bg-[#000000] text-[#02FE00] text-[18px] font-pixardisplay px-2 py-1">
          C720 D604 C815
        </div>
      </div>

      {/* 호버 시 ProfileBack 컴포넌트 */}
      {isHovered && (
        <div className="absolute inset-0 flex justify-center items-center rounded-lg">
          <ProfileBack />
        </div>
      )}
    </div>
  );
}
