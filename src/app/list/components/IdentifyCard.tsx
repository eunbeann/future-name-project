import Identify from "@/app/assets/image/identifyCard.png";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";

interface IdentifyCardProps {
  id: number;
  date: string;
  firstName: string;
  lastName: string;
  newFirstName: string;
  newLastName: string;
}

export default function IdentifyCard({
  id,
  date,
  firstName,
  lastName,
  newFirstName,
  newLastName,
}: IdentifyCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const formattedDate = format(new Date(date), "MM.dd");

  return (
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-dunggeunmo">
      <div className="relative">
        <Image
          className="min-w-[654px] max-w-[654px] h-[405px]"
          src={Identify}
          alt="Identify"
          onLoad={() => setIsLoaded(true)}
        />
        {isLoaded && (
          <>
            <p className="absolute top-[128px] right-[346px] text-xl text-[#ffffff]">
              {`${newLastName} ${newFirstName}`}
            </p>
            <p className="absolute top-[159px] right-[400px] text-xl text-[#ffffff]">
              {firstName} {lastName}
            </p>
            <p className="absolute top-[216px] right-[330px] text-[#ffffff]">
              {id}
            </p>
            <p className="absolute top-[260px] right-[310px] text-[#ffffff]">
              2100.{formattedDate}
            </p>
            <p className="absolute top-[300px] right-[316px] text-[#ffffff]">
              FNM CENTER
            </p>
          </>
        )}
      </div>
    </div>
  );
}
