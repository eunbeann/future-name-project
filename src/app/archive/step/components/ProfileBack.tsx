import profileBack from "@/app/assets/icon/profileBack.png";
import fakeProfile from "@/app/assets/image/fakeProfile1.png";
import Image from "next/image";

export default function ProfileBack() {
  return (
    <>
      <div>
        {/* <div className="absolute w-[210px] h-[320px]"> */}
        <Image
          src={fakeProfile}
          alt="Profile"
          objectFit="cover"
          width={50}
          height={50}
        />
        {/* TODO: 폰트 변경 */}
        <div className="absolute bottom-0 left-0 w-full text-center  bg-[#000000] text-[#02FE00] text-[18px] font-pixardisplay px-2 py-1">
          C720 D604 C815
        </div>
        <Image
          src={profileBack}
          alt="profileBack"
          width={210}
          height={320}
          className="absolute top-0 left-0"
        />
        {/* </div> */}
      </div>
    </>
  );
}
