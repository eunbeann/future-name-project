"use client";

import NeonDialog from "@/app/common/NeonDialog";
import { TypeAnimation } from "react-type-animation";

export default function Third() {
  return (
    <NeonDialog>
      <p className="font-dunggeunmo text-[18px] text-[#000000]">
        <TypeAnimation
          sequence={[
            "미래의 이름은 코드입니다.\n데이터 속에서 정의됩니다. 당신의 이름을 코드로 변환하여,\n시스템에 맞는 정체성으로 변환됩니다.",
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
