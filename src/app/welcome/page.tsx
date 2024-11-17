import text from "@/app/assets/image/welcomeTxt.png";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <Image
      className="w-[100vw] h-[100vh] object-cover z-30"
      src={text}
      alt="text"
    />
  );
}
