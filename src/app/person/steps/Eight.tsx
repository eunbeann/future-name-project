import CertificationCard from "@/app/list/components/CertificationCard";
import { PersonCardProps } from "@/app/list/components/PersonCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useRecoilState } from "recoil";
import { stepNumbers } from "../atoms/atoms";

export default function Eight() {
  const [showCertification, setShowCertification] = useState(false);
  const [step, setStep] = useRecoilState(stepNumbers);
  const router = useRouter();

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

  return (
    <div>
      <p className="absolute left-9 top-[380px] font-dunggeunmo text-[#02FE00] text-[32px] text-center w-[760px]">
        <TypeAnimation
          sequence={["개명신청서를 받으시겠습니까?"]}
          wrapper="span"
          speed={5}
          style={{ display: "inline-block", whiteSpace: "pre-line" }}
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
            onClick={() => router.push("/list")}
            className="w-[18rem] h-[4.7rem] font-dunggeunmo text-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center cursor-pointer"
          >
            끝내기
          </button>
          <button
            onClick={() => setShowCertification(true)}
            className="w-[18rem] h-[4.7rem] font-dunggeunmo bg-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center cursor-pointer"
          >
            받기
          </button>
        </div>
      </div>
    </div>
  );
}
