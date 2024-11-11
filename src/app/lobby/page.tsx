import movingLogo from "@/app/assets/gif/movingLogo.gif";
import introduceFrame from "@/app/assets/icon/introduceFrame.png";
import renameFrame from "@/app/assets/icon/renameFrame.png";
import welcomeFrame from "@/app/assets/icon/welcomeFrame.png";
import lobbyBg from "@/app/assets/image/lobbyBg.png";
import Image from "next/image";
import MainContainer from "../common/MainContainer";

export default function LobbyPage() {
  return (
    <MainContainer bgImage={lobbyBg}>
      <div className="flex flex-col justify-center items-center h-full">
        <Image
          src={movingLogo}
          alt="설명 텍스트"
          className="w-[300px] h-[280px]"
        />
        <div className="flex gap-[15px]">
          <div className="border-2 border-[#9F9F9F] bg-[#D9D9D9F2] w-[450px] "></div>
          <div className="border-2 border-[#9F9F9F] bg-[#D9D9D9F2] w-[100px] text-center font-dunggeunmo">
            SEARCH
          </div>
        </div>
        <div className="bg-[#02FE00] px-[30px] mt-[40px] font-dunggeunmo">
          SITE
        </div>
        <div className="flex gap-[34px] mt-[25px]">
          <Image
            className="w-[280px] h-[170px]"
            src={welcomeFrame}
            alt="welcomeFrame"
          />
          <Image
            className="w-[280px] h-[170px]"
            src={introduceFrame}
            alt="introduceFrame"
          />
          <Image
            className="w-[280px] h-[170px]"
            src={renameFrame}
            alt="renameFrame"
          />
        </div>
        {/* <div className="absolute w-full flex justify-center bottom-12">
          <NeonDialog>
            {`그때, 내 앞을 막는 거대 스크린에 뉴스가 흐른다.\n'인간의 정체성은 이제 코드로 정의된다.'\n코드? 내 정체성이 코드로?`}
          </NeonDialog>
        </div> */}
      </div>
    </MainContainer>
  );
}
