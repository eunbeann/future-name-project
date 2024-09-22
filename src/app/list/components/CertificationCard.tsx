import certification from "@/app/assets/image/certification.png";
import { format } from "date-fns";
import Image from "next/image";

interface CertificationCardProps {
  id: number;
  date: string;
  firstName: string;
  lastName: string;
  newFirstName: string;
  newLastName: string;
}

export default function CertificationCard({
  id,
  date,
  firstName,
  lastName,
  newFirstName,
  newLastName,
}: CertificationCardProps) {
  const formattedDate = format(new Date(date), "MM.dd");
  return (
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <Image
          className="min-w-[580px] max-w-[580px] h-[855px]"
          src={certification}
          alt="certification"
        />
        <p className="absolute top-[291px] right-[145px] text-sm text-white">
          {id}
        </p>
        <p className="absolute top-[322px] right-[125px] text-xs text-white">
          2100.{formattedDate}
        </p>
        <p className="absolute top-[413px] right-[258px] text-white">
          {lastName}
        </p>
        <p className="absolute top-[413px] right-[168px] text-white">
          {firstName}
        </p>
        <p className="absolute top-[485px] right-[247px]  text-white">
          {newLastName}
        </p>
        <p className="absolute top-[485px] right-[132px]  text-white">
          {newFirstName}
        </p>
      </div>
    </div>
  );
}
