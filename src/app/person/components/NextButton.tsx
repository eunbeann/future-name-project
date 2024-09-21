import { useRecoilState } from "recoil";
import { stepNumbers } from "../atoms/atoms";

export default function NextButton() {
  const [step, setStep] = useRecoilState(stepNumbers);
  return (
    <div
      onClick={() => setStep(step + 1)}
      className="absolute left-[36%] bottom-[3.6rem] w-[18rem] h-[4.7rem] text-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center pt-[1.1rem]"
    >
      확인
    </div>
  );
}
