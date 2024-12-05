"use client";

import sending from "@/app/assets/gif/sending1Img.gif";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Sending2() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative xl:w-[78%] rounded-lg overflow-hidden">
        <Image
          className="w-full h-auto rounded-lg"
          src={sending}
          alt="sending"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      <div className="absolute -bottom-[76px] flex justify-center xl:w-[100%]">
        <NeonDialog sending>
          <p className="font-dunggeunmo text-[18px] xl:text-[26px] text-[#000000]">
            <TypeAnimation
              sequence={[
                "과거에 이름을 코드로 바꾼 인간들의 데이터가 보관된 곳에 오게되다.\n끝없이 이어진 데이터들이 차갑게 날 쳐다보는 듯하다.",
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
    </div>
  );
}
