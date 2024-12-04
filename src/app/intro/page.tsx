"use client";

import arrow from "@/app/assets/gif/movingArrow.gif";
import introPerson from "@/app/assets/icon/introPerson.png";
import rowLogo from "@/app/assets/icon/rowLogo.png";
import introBg from "@/app/assets/image/welcomeBg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MainContainer from "../common/MainContainer";

export default function IntroPage() {
  const router = useRouter();
  return (
    <MainContainer bgImage={introBg}>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center w-[60%] h-full overflow-y-scroll scrollbar-hide bg-[#000000] px-[50px] py-[30px] font-dunggeunmo text-[#02FE00] text-center">
          <Image
            className="h-[120px] w-auto py-[25px]"
            src={rowLogo}
            alt="row-logo"
          />
          <Image
            className="w-[280px] mt-[30px]"
            src={introPerson}
            alt="intro-person"
          />
          <h1 className="mt-[10px] text-[26px] xl:text-[32px] xl:mb-[32px] xl:mt-[24px]">
            작명가 인사말
          </h1>
          <p className="mt-[10px] whitespace-break-spaces w-[75%] xl:text-[22px] tracking-wider leading-8">
            {`환영합니다. 퓨처네이밍센터의 작명가 **코드(CODE)**입니다.\n저희 센터는 이름을 넘어, 시대의 정체성을 부여하는 곳입니다.\n과거의 감정적 유물로서의 이름은 이제 사라지고, 새로운 코드화된 정체성이 여러분의 역할을 정의합니다.\n\n저는 수십 년간 인공지능과 빅데이터를 연구하며 이름의 새로운 역할을 개척해왔습니다. 퓨처네이밍센터에서 부여하는 이름은 단순한 호칭이 아닌, 데이터로 최적화된 사회적 기능 그 자체입니다. 여러분의 이름은 이제 코드로 변환되어, 시스템 속에서 완벽히 동작하는 정체성으로 자리 잡을 것입니다.\n\n퓨처네이밍센터는 과거와의 단절이자, 미래와의 연결입니다. 저 **코드(CODE)**는 여러분이 새로운 세상에서 최적화된 역할을 수행할 수 있도록 안내하겠습니다. 여러분의 이름이 곧 시대의 일부가 될 것입니다.\n\n퓨처네이밍센터 작명가 코드(CODE)`}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          router.back();
        }}
      >
        <Image
          className="absolute left-[54px] bottom-[37px] xl:w-[86px] "
          src={arrow}
          alt="arrow"
        />
      </button>
    </MainContainer>
  );
}
