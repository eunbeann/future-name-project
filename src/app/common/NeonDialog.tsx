import playBtn from "@/app/assets/gif/playBtn.gif";
import Image from "next/image";

// TODO: props로 텍스트를 배열로 받고 버튼 클릭시 다음 텍스트로 변경
export default function NeonDialog({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative bg-[#02FE00] w-full h-[20%] z-50 flex justify-center items-center rounded-[8px] py-[20px] mx-[80px]">
      <p className="font-dunggeunmo whitespace-pre-wrap">{children}</p>
      <Image
        className="absolute w-[35px] h-[35px] right-3 bottom-2"
        src={playBtn}
        alt="playButton"
        priority
      />
    </div>
  );
}
