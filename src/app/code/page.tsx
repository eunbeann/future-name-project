"use client";

import aiList from "@/app/assets/icon/aiListIcon.png";
import code from "@/app/assets/icon/codeIcon.png";
import text from "@/app/assets/icon/fncWhiteLetter.png";
import project from "@/app/assets/icon/projectIcon.png";
import bg from "@/app/assets/image/cloudSpace.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MainContainer from "../common/MainContainer";
import PinkButton from "../common/PinkButton";

export default function CodePage() {
  const router = useRouter();
  return (
    <MainContainer bgImage={bg}>
      <div className="flex flex-col == items-center h-full">
        <Image
          src={text}
          alt="FNC"
          className="absolute top-[80px] w-[340px] h-auto xl:w-[45%] xl:h-auto xl:my-[10px] z-50"
        />
        <div className="absolute top-[240px] bg-[#000000] xl:pt-[105px] xl:px-[70px] xl:w-[68%] xl:pb-[155px]">
          <div className="flex ml-[9px] justify-evenly w-full h-auto xl:pb-[30px]">
            <Link
              href={"project"}
              className="flex flex-col justify-center items-center gap-[20px]"
            >
              <Image
                className="xl:w-[160px] xl:h-[140px]"
                src={project}
                alt="projectIcon"
              />
              <p className="font-dunggeunmo text-[#ffffff] xl:text-[36px]">
                프로젝트 설명
              </p>
            </Link>
            <Link
              href={"/code"}
              className="flex flex-col justify-center items-center gap-[20px]"
            >
              <Image
                className="xl:w-[160px] xl:h-[140px]"
                src={code}
                alt="codeIcon"
              />
              <p className="font-dunggeunmo text-[#ffffff] xl:text-[36px]">
                웹사이트 구조설명
              </p>
            </Link>
            <Link
              href={"/list"}
              className="flex flex-col justify-center items-center gap-[20px]"
            >
              <Image
                className="xl:w-[160px] xl:h-[140px]"
                src={aiList}
                alt="AlListIcon"
              />
              <p className="font-dunggeunmo text-[#ffffff] xl:text-[36px]">
                실시간 아카이브
              </p>
            </Link>
          </div>
          <p className="tracking-wide	xl:text-[30px] text-[#ffffff] whitespace-pre-wrap font-dunggeunmo text-center">
            {`이 프로젝트는 미래 사회를 배경으로, 인간의 이름과 정체성이 코드로 대체되는 세계를 체험하는 가상 웹사이트 형태로 구성됩니다. 사용자는 웹사이트에 접속해 가상의 "퓨처네이밍센터"에 들어가 이름을 코드로 변환하는 체험을 합니다. 도시를 탐험하고, 코드화된 사람들을 만나며, 자신의 정체성을 잃어가는 과정을 경험하게 됩니다. 탈출을 시도하지만 실패하고, 결국 자신이 시스템에 갇힌 기계임을 깨닫게 되며 이야기는 블랙코미디적 디스토피아 결말로 끝납니다.`}
          </p>
          <div className="absolute bottom-[18px] flex justify-center xl:w-[90%] xl:h-auto xl:my-[10px] z-50">
            <PinkButton text="뒤로가기" onClick={() => router.back()} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
