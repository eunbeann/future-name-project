import TypingText from "@/app/common/TypingText";
import CertificationCard from "@/app/list/components/CertificationCard";
import { PersonCardProps } from "@/app/list/components/PersonCard";
import { useEffect, useState } from "react";
import NextButton from "../components/NextButton";

export default function Seventh() {
  const [isComplete, setIsComplete] = useState(false);
  const [showCertification, setShowCertification] = useState(false);

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
        console.error(
          "로컬스토리지에서 userNames를 파싱하는 데 실패했습니다:",
          error
        );
      }
    }
  }, []);

  return (
    <div>
      <p className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] whitespace-pre-line text-center w-[760px]">
        <TypingText
          onComplete={handleComplete}
          speed={100}
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
      <NextButton action={() => setShowCertification(true)} />
    </div>
  );
}
