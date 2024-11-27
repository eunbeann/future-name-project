import person from "@/app/assets/icon/person.png";
import profileBack from "@/app/assets/icon/profileBack.png";
import Image from "next/image";

export default function ProfileBack() {
  return (
    <div className="relative">
      <Image
        src={person}
        alt="Profile"
        objectFit="cover"
        width={106}
        className="absolute bottom-[53px] left-[5px]"
      />
      {/* Name */}
      <div className="absolute flex justify-center items-center bottom-[203px] right-[6px] w-[212px] h-[53px] text-center text-[#000000] text-[26px] font-dunggeunmo">
        김지호
      </div>
      {/* Number */}
      <div className="absolute flex justify-center items-center bottom-[109px] right-[6px] w-[104px] h-[22px] text-center text-[#02FE00] text-[14px] font-pixardisplay">
        5
      </div>
      {/* Date Of Approval */}
      <div className="absolute bottom-[56px] flex justify-center items-center right-[6px] w-[104px] h-[22px] text-center text-[#02FE00] text-[14px] font-pixardisplay">
        2050. 12. 04
      </div>
      {/* TODO: 폰트 변경 */}
      <div className="absolute bottom-[5px] flex justify-center items-center left-[5px] w-[215px] h-[41px] text-center text-[#02FE00] text-[20px] font-pixardisplay">
        C720 D604 C815
      </div>
      <Image
        src={profileBack}
        alt="profileBack"
        className="w-[224px] h-[320px]"
      />
    </div>
  );
}
