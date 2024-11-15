"use client";

import NeonDialog from "@/app/common/NeonDialog";
import { TypeAnimation } from "react-type-animation";

export default function Second() {
  return (
    <NeonDialog>
      <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
        <TypeAnimation
          sequence={[
            "이름은 시대에 따라 다르게 사용되었습니다.\n과거에는 사회적, 문화적 의미를 담았지만,\n지금은 그런 의미는 없습니다. 이름은 이제 시스템의 일부일 뿐입니다.",
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
