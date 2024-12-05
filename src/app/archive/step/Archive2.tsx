import denied from "@/app/assets/image/deniedBg.png";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useSetRecoilState } from "recoil";
import { archiveNumber } from "../atoms/atom";
import { fakePeople } from "../mocks/fakePeople";
import ProfileChip from "./components/ProfileChip";

export default function Archive2() {
  const setArchiveStep = useSetRecoilState(archiveNumber);

  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  return (
    <>
      <Image
        alt="bg"
        src={denied}
        className="absolute w-full h-[79.5vh] rounded-b-[24px]"
      />

      <div className="flex justify-center items-center w-full h-full">
        <div className="grid grid-cols-6 gap-x-[50px] gap-y-[32px] pt-[60px] px-[120px]">
          {fakePeople.map((data, index) => (
            <ProfileChip
              name={data.name}
              intelligence={data.intelligence}
              number={data.number}
              date={data.date}
              futureName={data.futureName}
              img={data.img}
              key={index}
              isHovered={hoveredCardIndex === index}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-[76px] flex justify-center xl:w-[100%] z-50">
        <NeonDialog
          action={() => {
            setArchiveStep((prev) => prev + 1);
          }}
        >
          <p className="font-dunggeunmo text-[18px] xl:text-[26px] text-[#000000]">
            <TypeAnimation
              sequence={[
                `각자의 데이터가 칩 속에 보관되어 있다. 그들의 과거, 이름, 정체성…\n모두가 이 차가운 칩 안에 담겨 있다.`,
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
    </>
  );
}
