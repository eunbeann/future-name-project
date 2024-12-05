import Identify from "@/app/assets/image/identifyCard.png";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
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
  isList,
}: PersonCardProps & { isList?: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const formattedDate = format(new Date(date), "MM.dd");
  return (
    <>
      <div className="relative z-50 font-dunggeunmo">
        <Image
          className="w-[654px] h-full xl:w-[1000px] xl:h-full"
          src={Identify}
          alt="Identify"
          onLoad={() => setIsLoaded(true)}
        />
        {isLoaded && (
          <>
            <Image
              width={140}
              height={203}
              src={img}
              alt="X"
              className="absolute top-[89px] right-[77px] h-[183px] w-[129px] xl:h-[320px] xl:w-[220px] xl:top-[155px] xl:right-[136px] scale-x-[-1]"
            />
            <p className="absolute text-center w-[300px] right-[220px] top-[127px] xl:w-[480px] xl:top-[200px] xl:right:[270px] xl:left-[120px] text-[32px] text-[#ffffff] xl:text-[48px]">
              {`${futureLastName} ${futureFirstName}`}
            </p>
            <p className="absolute text-center w-[300px] right-[220px] xl:w-[420px] left top-[168px] xl:top-[275px] xl:left-[150px] text-xl xl:text-[40px] text-[#ffffff] ">
              {lastName}
              {firstName}
            </p>
            <p className="absolute text-center  xl:text-[24px] w-[66px] xl:w-[97px] bottom-[135px] xl:bottom-[236px] right-[268px] xl:right-[474px] text-[#ffffff]">
              {id}
            </p>
            <p className="absolute text-center xl:text-[24px] w-[92px] xl:w-[128px] bottom-[108px] xl:bottom-[188px] right-[267px] xl:right-[474px]  text-[#ffffff]">
              2050.{formattedDate}
            </p>
          </>
        )}
      </div>
      {isList && (
        <div className="w-full text-center font-dunggeunmo">
          <Link
            href={"/sending"}
            className="inline-block w-[500px] xl:w-[700px] py-[16px] xl:text-[26px] bg-[#02FE00] rounded-[22px] border border-[#ffffff] "
          >
            데이터 전송하기
          </Link>
        </div>
      )}
    </>
  );
}
