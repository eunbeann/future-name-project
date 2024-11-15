"use client";

import NeonDialog from "@/app/common/NeonDialog";
import { TypeAnimation } from "react-type-animation";

export default function First() {
  return (
    <NeonDialog>
      <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
        <TypeAnimation
          sequence={[
            "퓨처네이밍센터에 오신 것을 환영합니다. \n 당신의 이름은 더 이상 단순한 텍스트가 아닙니다.\n 시스템에 최적화된 코드로 변환될 것입니다.",
          ]}
          wrapper="span"
          speed={5}
          style={{
            display: "block",
            whiteSpace: "pre-line",
            color: "black",
          }}
        />
      </p>
    </NeonDialog>
  );
}
