"use client";

import text from "@/app/assets/icon/fncWhiteLetter.png";
import bg from "@/app/assets/image/cloudSpace.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MainContainer from "../common/MainContainer";
import PinkButton from "../common/PinkButton";

export default function ProjectPage() {
  const router = useRouter();
  return (
    <MainContainer bgImage={bg}>
      <div className="flex flex-col items-center h-full">
        <Image
          src={text}
          alt="FNC"
          className="absolute top-[80px] w-[340px] h-auto xl:w-[38%] xl:h-auto xl:my-[10px] z-50"
        />
        <div className="absolute top-[160px] bg-[#000000] xl:pt-[145px] xl:px-[70px] xl:w-[68%] xl:pb-[145px]">
          <p className="tracking-wide	xl:text-[24px] text-[#ffffff] whitespace-pre-wrap font-dunggeunmo text-center xl:mb-[22px]">
            {`2050년의 세상은 인공지능이 인간의 삶을 모든 측면에서 지배하는 시대입니다.
정부, 경제, 교육, 모든 시스템이 AI에 의해 운영되며,
인간은 그 안에서 효율적인 단위로 변환되었습니다.
이름 역시 그 흐름의 일환으로, 더 이상 감성적이거나 문화적인 요소가 아닌
인공지능 시스템이 이해하기 쉬운 코드로 변화했습니다.

미래 사회에서는 개명도 유니코드 시스템에 따라 철저히 관리되며,
이름이 아닌 코드로 개인의 정체성이 확립됩니다.
퓨처네이밍센터에서는 이러한 변화 속에서 어떻게
자신의 정체성을 새롭게 정의할 수 있는지를 탐구합니다.
이 웹사이트를 통해 사용자는 미래 사회의 흐름을 반영한 이름을 받으며,
자신을 새롭게 정립하는 체험을 할 수 있습니다.`}
          </p>
          <button
            onClick={() => router.back()}
            className="absolute bottom-[22px] flex justify-center xl:w-[90%] xl:h-auto xl:my-[16px] z-50"
          >
            <PinkButton text="뒤로가기" />
          </button>
        </div>
      </div>
    </MainContainer>
  );
}
