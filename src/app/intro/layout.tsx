import introBackground from "@/app/assets/image/introBackground.png";
import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        className="object-fill -z-10"
        src={introBackground}
        alt="introBackground"
        fill
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
