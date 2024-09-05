import listBackground from "@/app/assets/image/listBackground.png";
import Image from "next/image";
import Header from "../common/Header";
import TaskBar from "../common/TaskBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <div className="bg-gradient-to-b from-black to-blue-700 mix-blend-lighten h-[100vh]"> */}
      <Image
        className="fixed bottom-0 w-full h-[100vh] -z-50"
        src={listBackground}
        alt="introBackground"
        priority={true}
        draggable="false"
      />
      <Header />
      <div className="relative z-10">{children}</div>
      <TaskBar />
      {/* </div> */}
    </>
  );
}
