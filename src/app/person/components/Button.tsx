import { motion } from "framer-motion";

interface ButtonProps {
  hasButton: number;
}

export default function Button({ hasButton }: ButtonProps) {
  if (hasButton === 1) {
    return (
      <motion.button className="absolute left-[102px] top-[560px] border-2 border-1 text-[35px] text-[#02FE00] border-[#02FE00] w-[620px] py-4">
        입력하기
      </motion.button>
    );
  }

  if (hasButton === 2) {
    return (
      <div className="absolute left-[75px] top-[560px] text-[35px]  w-[700px] py-4">
        <div className="flex justify-center gap-[45px]">
          <motion.button className="px-[95px] border-2 text-[#02FE00] border-[#02FE00]">
            끝내기
          </motion.button>
          <motion.button className="px-[95px] border-2 text-black bg-[#02FE00] border-[#02FE00]">
            받기
          </motion.button>
        </div>
      </div>
    );
  }

  return null;
}
