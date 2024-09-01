import personBackground from "@/app/assets/image/personBg.png";
import Image from "next/image";
import Header from "../common/Header";
import TaskBar from "../common/TaskBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Image
        src={personBackground}
        // pt=[48] is equivalent to padding-top: 48px
        className="object-fill -z-10"
        alt="introBackground"
        fill
        priority={true}
      />
      <div className="relative z-10">{children}</div>
      <TaskBar />
    </>
  );
}
