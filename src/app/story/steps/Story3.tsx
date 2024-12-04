"use client";

import story3 from "@/app/assets/gif/storyImg3.gif";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Story3() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative xl:w-[90%] rounded-lg overflow-hidden">
        <Image
          className="w-full h-auto rounded-lg"
          src={story3}
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
                "그때, 내 앞을 막는 거대 스크린에 뉴스가 흐른다.\n'인간의 정체성은 이제 코드로 정의된다.'\n코드? 내 정체성이 코드로?",
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
