"use client";

import story1 from "@/app/assets/gif/storyImg1.gif";
import NeonDialog from "@/app/common/NeonDialog";
import { STORY_TEXTS } from "@/constants/storyTexts";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Story1() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative w-[78%] rounded-lg overflow-hidden">
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

      <div className="absolute -bottom-[76px] flex justify-center w-[100%]">
        <NeonDialog story>
          <p className="font-dunggeunmo text-[26px] text-[#000000]">
            <TypeAnimation
              sequence={[STORY_TEXTS.story1]}
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
