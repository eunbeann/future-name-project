import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { TouchButton } from "../MotionButton";

interface ButtonProps {
  hasButton: number;
}

export default function Button({ hasButton }: ButtonProps) {
  const router = useRouter();
  if (hasButton === 1) {
    return (
      <>
        <motion.input
          className="absolute bg-[#242424B2] text-center left-[102px] top-[510px] text-[35px] font-dunggeunmo text-[#02FE00]  w-[645px] py-4"
          placeholder="입력하기"
        />
      </>
    );
  }

  if (hasButton === 2) {
    return (
      <div className="absolute left-[75px] top-[560px] text-[35px]  w-[700px] py-4">
        <div className="flex justify-center gap-[45px]">
          <TouchButton className="px-[95px] border-2 text-[#02FE00] border-[#02FE00] hover:bg-[#02FE00] hover:text-[#000000]">
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
