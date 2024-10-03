import Identify from "@/app/assets/image/identifyCard.png";
import { format } from "date-fns";
import Image from "next/image";

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
  const formattedDate = format(new Date(date), "MM.dd");

  const handleRewrite = () => {
    const data = localStorage.getItem("userNames");
    if (data) {
      try {
        const arr = JSON.parse(data);
        if (Array.isArray(arr) && arr.length > 0) {
          arr.pop();
          localStorage.setItem("userNames", JSON.stringify(arr));
          console.log("마지막 항목이 삭제되었습니다:", arr);
        } else {
          console.warn("로컬스토리지에 데이터가 없거나 배열이 아닙니다.");
        }
      } catch (error) {
        console.error("로컬스토리지 데이터를 파싱하는 중 오류 발생:", error);
      }
    } else {
      console.warn("로컬스토리지에 'Identifys' 키가 없습니다.");
    }
  };

  return (
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <Image
          className="min-w-[654px] max-w-[654px] h-[405px]"
          src={Identify}
          alt="Identify"
        />
        <p className="absolute top-[128px] right-[346px] text-xl text-[#ffffff]">
          {`${newLastName} ${newFirstName}`}
        </p>
        <p className="absolute top-[159px] right-[400px] text-xl text-[#ffffff]">
          {lastName}
          {firstName}
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
      </div>
    </div>
  );
}
