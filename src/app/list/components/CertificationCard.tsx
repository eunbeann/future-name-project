import certification from "@/app/assets/image/certification.png";
import PinkButton from "@/app/common/PinkButton";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter(); // useRouter 훅 사용
  const formattedDate = format(new Date(date), "MM.dd");

  // "다시쓰기" 버튼 클릭 핸들러
  const handleRewrite = () => {
    // 로컬스토리지에서 데이터 가져오기
    const data = localStorage.getItem("certifications"); // 저장된 키가 'certifications'인지 확인하세요
    if (data) {
      try {
        const arr = JSON.parse(data);
        if (Array.isArray(arr) && arr.length > 0) {
          arr.pop(); // 마지막 항목 삭제
          localStorage.setItem("certifications", JSON.stringify(arr)); // 업데이트된 배열 저장
          console.log("마지막 항목이 삭제되었습니다:", arr);
        } else {
          console.warn("로컬스토리지에 데이터가 없거나 배열이 아닙니다.");
        }
      } catch (error) {
        console.error("로컬스토리지 데이터를 파싱하는 중 오류 발생:", error);
      }
    } else {
      console.warn("로컬스토리지에 'certifications' 키가 없습니다.");
    }

    // 페이지 이동
    router.push("/person");
  };

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
        <div>
          <div className="absolute flex w-full justify-center gap-[43px] top-[820px]">
            <button onClick={handleRewrite}>
              <PinkButton text="다시쓰기" />
            </button>
            <Link href="/list">
              <PinkButton
                text="저장하기"
                onClick={() => {
                  console.log("clicked");
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
