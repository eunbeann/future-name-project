import profileBack from "@/app/assets/icon/profileBack.png";
import Image, { StaticImageData } from "next/image";

type ProfileChipProps = {
  name: string;
  intelligence: number;
  number: number;
  date: string;
  futureName: string;
  img: StaticImageData;
};

export default function ProfileBack({
  name,
  intelligence,
  number,
  date,
  futureName,
  img,
}: ProfileChipProps) {
  return (
    <div className="relative">
      <Image
        src={img}
        alt="Profile"
        objectFit="cover"
        width={106}
        className="absolute bottom-[53px] left-[5px]"
      />
      {/* Name */}
      <div className="absolute flex justify-center items-center bottom-[203px] right-[6px] w-[212px] h-[53px] text-center text-[#000000] text-[26px] font-dunggeunmo">
        {name}
      </div>
      {/* Number */}
      <div className="absolute flex justify-center items-center bottom-[109px] right-[6px] w-[104px] h-[22px] text-center text-[#02FE00] text-[14px] font-pixardisplay">
        {intelligence}
      </div>
      {/* Date Of Approval */}
      <div className="absolute bottom-[56px] flex justify-center items-center right-[6px] w-[104px] h-[22px] text-center text-[#02FE00] text-[14px] font-pixardisplay">
        {date}
      </div>
      {/* TODO: 폰트 변경 */}
      <div className="absolute bottom-[5px] flex justify-center items-center left-[5px] w-[215px] h-[41px] text-center text-[#02FE00] text-[20px] font-pixardisplay">
        {futureName}
      </div>
      <Image
        src={profileBack}
        alt="profileBack"
        className="w-[224px] h-[320px]"
      />
    </div>
  );
}
