import { useRouter } from "next/navigation";
import { TouchButton } from "../MotionButton";

interface ButtonProps {
  hasButton: number;
}

export default function Button({ hasButton }: ButtonProps) {
  const router = useRouter();
  if (hasButton === 1) {
    return (
      <TouchButton className="absolute left-[102px] top-[560px] border-2 border-1 text-[35px] text-[#02FE00] border-[#02FE00] w-[620px] py-4 hover:bg-[#02FE00] hover:text-black">
        입력하기
      </TouchButton>
    );
  }

  if (hasButton === 2) {
    return (
      <div className="absolute left-[75px] top-[560px] text-[35px]  w-[700px] py-4">
        <div className="flex justify-center gap-[45px]">
          <TouchButton className="px-[95px] border-2 text-[#02FE00] border-[#02FE00] hover:bg-[#02FE00] hover:text-black">
            끝내기
          </TouchButton>
          <TouchButton
            onClick={() => router.push("/list")}
            className="px-[95px] border-2 text-black bg-[#02FE00] border-[#02FE00] hover:bg-transparent hover:text-[#02FE00]"
          >
            받기
          </TouchButton>
        </div>
      </div>
    );
  }

  return null;
}
