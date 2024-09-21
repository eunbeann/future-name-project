import TypingText from "@/app/common/TypingText";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NextButton from "../components/NextButton";

export default function First() {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(false);
  const handleComplete = () => {
    setIsComplete(true);
  };
  return (
    <div>
      <p className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] text-center w-[760px]">
        <TypingText
          onComplete={handleComplete}
          speed={100}
          text={`안안녕하세요. \n 퓨처네이밍센터에 오신 것을 환영합니다.`}
        />
      </p>
      <NextButton />
    </div>
  );
}
