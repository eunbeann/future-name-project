"use client";

import story2 from "@/app/assets/gif/storyImg2.gif";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Story2() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative xl:w-[90%] rounded-lg overflow-hidden">
        <Image
          className="w-full h-auto rounded-lg"
          src={story2}
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

      <div className="absolute -bottom-[110px] flex justify-center xl:w-[100%]">
        <NeonDialog story>
          <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
            <TypeAnimation
              sequence={[
                "주변을 둘러보니 사람들은… 사람들 같지 않다. 무표정한 얼굴로 움직이는\n이들은 어딘가 기계처럼 보인다. 설마, 이들이 다 기계인 건가?",
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
