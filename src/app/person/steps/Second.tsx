import { TypeAnimation } from "react-type-animation";
import NextButton from "../components/NextButton";

export default function Second() {
  return (
    <div>
      <p className="absolute left-9 top-[380px] font-dunggeunmo text-[#02FE00] text-[32px] text-center w-[760px]">
        <TypeAnimation
          sequence={[
            "이름은 시대에 따라 다르게 사용되었습니다.\n과거에는 사회적, 문화적 의미를 담았지만,\n지금은 그런 의미는 없습니다.\n이름은 이제 시스템의 일부일 뿐입니다.",
          ]}
          wrapper="span"
          speed={5}
          style={{ display: "inline-block", whiteSpace: "pre-line" }}
        />
      </p>

      <NextButton />
    </div>
  );
}
