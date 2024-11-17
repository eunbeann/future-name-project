import bg from "@/app/assets/image/welcomeBg.png";
import text from "@/app/assets/image/welcomeTxt.png";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="w-full h-full relative">
      {/* Background Image */}
      <Image
        className="absolute w-[100vw] h-[100vh] top-0 left-0 object-cover -z-20"
        src={bg}
        alt="welcomeBg"
      />
      {/* Text Image */}
      <Image
        className="absolute w-[100vw] h-[100vh] top-0 left-0 object-cover z-50"
        src={text}
        alt="text"
      />
    </div>
  );
}
