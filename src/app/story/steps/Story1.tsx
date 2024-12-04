"use client";

import story1 from "@/app/assets/gif/storyImg1.gif";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Story1() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative w-[90%] rounded-lg overflow-hidden">
        <Image
          className="w-full h-auto rounded-lg"
          src={story1}
          alt="story1"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="absolute -bottom-[65px] flex justify-center w-[100%]">
        <NeonDialog story>
          <p className="font-dunggeunmo text-[18px] xl:text-[26px] text-[#000000]">
            <TypeAnimation
              sequence={[
                "네온사인이 번쩍이는 거리, 온통 기계 소리와 빛이 가득한 곳. 여긴 어디지?\n현실과는 너무 다른 느낌이다. 하지만 발 아래 닿는 이 감촉은 분명하다.\n꿈을 꾸는 건 아닐 텐데….",
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
