"use client";
import bg from "@/app/assets/image/welcomeBg.png";
import Image from "next/image";

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Image
        className="absolute w-[100vw] h-[100vh] top-0 left-0 object-cover -z-20"
        src={bg}
        alt="welcomeBg"
      />
      {children}
    </div>
  );
}
