import fakeProfile from "@/app/assets/image/fakeProfile1.png";
import Image from "next/image";
import ProfileBack from "./ProfileBack";

type ProfileChipProps = {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export default function ProfileChip({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: ProfileChipProps) {
  return (
    <div
      className="relative w-[224px] h-[320px] cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* 카드 앞면 */}
      <div
        className={`absolute inset-0 bg-[#02FE00] clip-diagonal ${
          isHovered ? "hidden" : ""
        }`}
      />
      <div
        className={`absolute inset-[4px] clip-diagonal flex flex-col ${
          isHovered ? "hidden" : ""
        }`}
      >
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

      {/* 카드 뒷면 (호버 시 표시) */}
      {isHovered && (
        <div className="absolute inset-0 flex justify-center items-center rounded-lg bg-black">
          <ProfileBack />
        </div>
      )}
    </div>
  );
}
