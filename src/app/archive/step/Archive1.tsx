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
        className="absolute w-full h-full rounded-b-[24px]"
      />
      <div className="w-full h-full flex flex-wrap justify-center items-center gap-x-[50px] gap-y-[32px] py-[20px] overflow-auto">
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
    </>
  );
}
