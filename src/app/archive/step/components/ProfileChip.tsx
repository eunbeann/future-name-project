import Image, { StaticImageData } from "next/image";
import ProfileBack from "./ProfileBack";

type ProfileChipProps = {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  name: string;
  intelligence: number;
  number: number;
  date: string;
  futureName: string;
  img: StaticImageData;
};

export default function ProfileChip({
  isHovered,
  onMouseEnter,
  onMouseLeave,
  name,
  intelligence,
  number,
  date,
  futureName,
  img,
}: ProfileChipProps) {
  return (
    <div
      className="relative w-[204px] h-[300px] cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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
        <Image src={img} alt="Profile" layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 w-full text-center bg-[#000000] text-[#02FE00] text-[18px] font-pixardisplay px-2 py-1">
          {futureName}
        </div>
      </div>

      {isHovered && (
        <div className="absolute inset-0 flex justify-center items-center rounded-lg bg-black">
          <ProfileBack
            name={name}
            intelligence={intelligence}
            number={number}
            date={date}
            futureName={futureName}
            img={img}
          />
        </div>
      )}
    </div>
  );
}
