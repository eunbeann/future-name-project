import archive2 from "@/app/assets/image/archive2Img.png";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useRecoilState } from "recoil";
import { archiveNumber } from "../atoms/atom";

export default function Archive4() {
  const [next, setNext] = useRecoilState(archiveNumber);

  return (
    <>
      <div className="absolute bottom-[65px] flex justify-center xl:w-[100%] z-50">
        <NeonDialog
          action={() => {
            setNext((prev) => prev + 1);
          }}
        >
          <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
            <TypeAnimation
              sequence={[
                `여기서도 익숙한 이름이 보인다. 이건… 내가 아는 사람들이 아닌가?\n그들도 다 이 시스템의 일부가 되어버린 건가? 이게 정말 가상 세계가 맞나?`,
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
      <Image
        className="w-[100vw] h-[100%] z-30"
        src={archive2}
        alt="background"
      />
    </>
  );
}
