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
              className="absolute top-[80px] right-[70px] h-[170px] w-[117px] xl:h-[320px] xl:w-[220px] xl:top-[155px] xl:right-[136px] scale-x-[-1]"
            />
            <p className="absolute text-center w-[220px] right-[215px] top-[105px] xl:w-[480px] xl:top-[200px] xl:left-[120px] text-[32px] text-[#ffffff] xl:text-[48px]">
              {`${futureLastName} ${futureFirstName}`}
            </p>
            <p className="absolute text-center w-[230px] right-[220px] top-[148px] text-xl xl:w-[420px] xl:top-[275px] xl:left-[150px] xl:text-[40px] text-[#ffffff] ">
              {lastName}
              {firstName}
            </p>
            <p className="absolute text-center w-[56px] bottom-[123px] right-[250px] xl:text-[24px] xl:bottom-[236px] xl:right-[494px] text-[#ffffff]">
              {id}
            </p>
            <p className="absolute text-center bottom-[93px] right-[237px] text-[14px] xl:text-[24px] w-[92px] xl:w-[128px] xl:bottom-[183px] xl:right-[474px] text-[#ffffff]">
              2050.{formattedDate}
            </p>
          </>
        )}
      </div>
      {isList && (
        <div className="w-full text-center font-dunggeunmo">
          <Link
            href={"/sending"}
            className="inline-block w-[350px] py-[8px] rounded-[12px] bg-[#02FE00] xl:py-[16px] xl:rounded-[22px] border border-[#ffffff] xl:w-[700px] xl:text-[26px] "
          >
            데이터 전송하기
          </Link>
        </div>
      )}
    </>
  );
}
