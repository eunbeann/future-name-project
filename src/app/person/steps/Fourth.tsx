import TypingText from "@/app/common/TypingText";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NextButton from "../components/NextButton";

export default function Fourth() {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(false);
  const handleComplete = () => {
    setIsComplete(true);
  };
  return (
    <div>
      <p className="absolute left-9 top-[400px] text-[#02FE00] text-[35px] whitespace-pre-line text-center w-[760px]">
        <TypingText
          onComplete={handleComplete}
          speed={100}
          text={`확확인했습니다! 이름을 입력해주세요.`}
        />
      </p>

      <NextButton />
    </div>
  );
}
