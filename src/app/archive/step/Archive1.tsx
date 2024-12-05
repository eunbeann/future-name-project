import denied from "@/app/assets/image/deniedBg.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { archiveNumber } from "../atoms/atom";
import { fakePeople } from "../mocks/fakePeople";
import ProfileChip from "./components/ProfileChip";

export default function Archive1() {
  const setArchiveStep = useSetRecoilState(archiveNumber);

  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArchiveStep((step) => step + 1);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

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
    </>
  );
}
