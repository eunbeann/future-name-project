import mainBg from "@/app/assets/image/mainBg.png";
import Image from "next/image";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Image className="w-full h-full absolute" alt="mainBg" src={mainBg} />
      <div>{children}</div>
    </>
  );
}
