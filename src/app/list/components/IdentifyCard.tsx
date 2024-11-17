import Identify from "@/app/assets/image/identifyCard.png";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { PersonCardProps } from "./PersonCard";

export default function IdentifyCard({
  id,
  date,
  firstName,
  lastName,
  futureFirstName,
  futureLastName,
  img,
}: PersonCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const formattedDate = format(new Date(date), "MM.dd");
  return (
    <div className="relative z-50 font-dunggeunmo">
      <Image
        className="w-[654px] h-full xl:w-[1000px] xl:h-full"
        src={Identify}
        alt="Identify"
        onLoad={() => setIsLoaded(true)}
      />
      {/* {isLoaded && ( */}
      <>
        <Image
          width={140}
          height={203}
          src={img}
          alt="profile Image"
          className="absolute top-[103px] right-[91px] h-[203px] xl:h-[320px] xl:w-[220px] xl:top-[155px] xl:right-[136px] bg-green8 scale-x-[-1]"
        />
        <p className="absolute text-center w-[300px] xl:w-[420px] top-[132px] xl:top-[200px] right:[270px] xl:left-[150px] text-[32px] text-[#ffffff] xl:text-[48px] ">
          {`${futureLastName} ${futureFirstName}`}
        </p>
        <p className="absolute text-center w-[300px] xl:w-[420px] top-[168px] xl:top-[275px] right-[270px] xl:left-[150px] text-xl xl:text-[40px] text-[#ffffff] ">
          {lastName}
          {firstName}
        </p>
        <p className="absolute text-center xl:text-[24px] w-[66px] xl:w-[97px] bottom-[153px] xl:bottom-[236px] right-[308px] xl:right-[474px] text-[#ffffff]">
          {id}
        </p>
        <p className="absolute text-center xl:text-[24px] w-[92px] xl:w-[128px] bottom-[118px] xl:bottom-[188px] right-[307px] xl:right-[474px]  text-[#ffffff]">
          2100.{formattedDate}
        </p>
      </>
      {/* )} */}
    </div>
  );
}
