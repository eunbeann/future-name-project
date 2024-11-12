"use client";

import movingPerson from "@/app/assets/gif/movingPerosn.gif";
import NeonDialog from "@/app/common/NeonDialog";
import { convertToUnicode } from "@/hooks/changeToUni";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useRecoilValue } from "recoil";
import { userName } from "../atoms/atoms";

export default function Seventh() {
  const name = useRecoilValue(userName);

  const uniFistName = convertToUnicode(name.firstName);
  const uniLastName = convertToUnicode(name.lastName);
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <Image className="h-[400px]" src={movingPerson} alt="movingPerson" />
      <NeonDialog>
        <p className="font-dunggeunmo text-[18px] text-[#000000]">
          <TypeAnimation
            sequence={[
              `변환 완료.\n 당신의 이름은 이제 [${uniLastName} ${uniFistName}]입니다.\n이 이름은 당신의 정체성을 쉽게 식별할 수 있습니다.`,
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
    </div>
  );
}
