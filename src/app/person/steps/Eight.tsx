import TypingText from "@/app/common/TypingText";
import CertificationCard from "@/app/list/components/CertificationCard";
import { PersonCardProps } from "@/app/list/components/PersonCard";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { stepNumbers } from "../atoms/atoms";

export default function Eight() {
  const [isComplete, setIsComplete] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [step, setStep] = useRecoilState(stepNumbers);
  const router = useRouter();

  const handleComplete = () => {
    setIsComplete(true);
  };

  const [names, setNames] = useState<PersonCardProps[]>([]);
  const lastUser = names.length > 0 && names[names.length - 1];

  useEffect(() => {
    const storedNames = localStorage.getItem("userNames");
    if (storedNames) {
      try {
        const parsedNames: PersonCardProps[] = JSON.parse(storedNames);
        setNames(parsedNames);
      } catch (error) {
        console.error("로컬스토리지에서 userNames를 파싱 실패", error);
      }
    }
  }, []);

  const onClickButton = useCallback(() => {
    if (step !== 8) {
      setStep((prevStep) => prevStep + 1);
    }
  }, [step, setStep]);

  return (
    <div>
      <p className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] whitespace-pre-line text-center w-[760px]">
        <TypingText
          onComplete={handleComplete}
          text={`개개명신청서를 받으시겠습니까?`}
        />
      </p>
      {showCertification && lastUser && (
        <CertificationCard
          id={names.length}
          date={lastUser.date}
          firstName={lastUser.firstName || ""}
          lastName={lastUser.lastName || ""}
          newFirstName={lastUser.futureFirstName}
          newLastName={lastUser.futureLastName}
        />
      )}
      <div className="absolute left-[18%] bottom-[3.6rem] ">
        <div className="flex gap-7">
          <button
            onClick={() => router.push("/")}
            className="w-[18rem] h-[4.7rem] text-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center cursor-pointer"
          >
            끝내기
          </button>
          <button
            onClick={() => setShowCertification(true)}
            className="w-[18rem] h-[4.7rem] bg-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center cursor-pointer"
          >
            받기
          </button>
        </div>
      </div>
    </div>
  );
}
