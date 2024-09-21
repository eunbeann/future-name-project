import TypingText from "@/app/common/TypingText";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NextButton from "../components/NextButton";

export default function Second() {
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
          text={`퓨퓨처네이밍센터는 미래의 유행할 이름을 미리 지어보는 가상의 작명소입니다.\n당신의 고유한 이름을 인공지능 기술을 통해 특별한 \n 코드 이름으로 변환해 드리겠습니다.`}
        />
      </p>

      <NextButton />
    </div>
  );
}
