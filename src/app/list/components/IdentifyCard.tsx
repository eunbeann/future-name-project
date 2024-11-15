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
        className="min-w-[654px] max-w-[654px] h-[405px]"
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
          className="absolute top-[103px] right-[91px] h-[203px] bg-green8 scale-x-[-1]"
        />
        <p className="absolute text-center w-[300px] top-[132px] right-[270px] text-[32px] text-[#ffffff]">
          {`${futureLastName} ${futureFirstName}`}
        </p>
        <p className="absolute text-center w-[300px] top-[168px] right-[270px] text-xl text-[#ffffff]">
          {lastName}
          {firstName}
        </p>
        <p className="absolute text-center w-[66px] bottom-[153px] right-[308px] text-[#ffffff]">
          {id}
        </p>
        <p className="absolute text-center w-[92px] bottom-[118px] right-[307px] text-[#ffffff]">
          2100.{formattedDate}
        </p>
      </>
      {/* )} */}
    </div>
  );
}
