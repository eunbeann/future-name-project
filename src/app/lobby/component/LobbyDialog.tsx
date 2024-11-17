import playBtn from "@/app/assets/gif/playBtn.gif";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function LobbyDialog({
  handleDialogClose,
}: {
  handleDialogClose: () => void;
}) {
  return (
    <div className="absolute w-full flex justify-center bottom-12">
      <div className="relative bg-[#02FE00] w-[90%] h-[130px] xl:h-[250px] z-50 flex justify-center items-center rounded-[8px] py-[20px] text-center xl:w-[76%]">
        <div className="font-dunggeunmo whitespace-pre-wrap">
          <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
            <TypeAnimation
              sequence={[
                "이곳에선 이름이 단순한 호칭이 아니라, 시스템에 맞춰 재정의된다고?\n대체 무슨 세계에 발을 들인 거지….",
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
        </div>
        <button
          onClick={handleDialogClose}
          className="absolute right-7 bottom-6 w-fit h-fit"
        >
          <Image
            className="w-[35px] h-[35px] xl:w-[60px] xl:h-[60px]"
            src={playBtn}
            alt="Play Button"
            priority
          />
        </button>
      </div>
    </div>
  );
}
