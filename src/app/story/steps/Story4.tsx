"use client";

import story4 from "@/app/assets/gif/storyImg4.gif";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Story4() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative w-[78%] rounded-lg overflow-hidden">
        <Image
          className="w-full h-auto rounded-lg"
          src={story4}
          alt="story2"
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

      <div className="absolute -bottom-[76px] flex justify-center xl:w-[100%]">
        <NeonDialog story>
          <p className="font-dunggeunmo text-[18px] xl:text-[26px] text-[#000000]">
            <TypeAnimation
              sequence={[
                "어디선가 이상한 기운이 느껴진다. 눈앞에 '퓨처네이밍센터'라는 이름이 떠오른다.\n여기가 나의 정체성을 코드로 바꿀 곳인가? 들어가야 할지 망설여지지만,\n발길은 이미 그곳으로 향하고 있다 ",
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
