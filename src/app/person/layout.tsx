import personBackground from "@/app/assets/image/personBg.png";
import personBox from "@/app/assets/image/personBox.png";
import Image from "next/image";
import ClientRecoilRoot from "../common/ClientRecoilRoot";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClientRecoilRoot>
      <div className="relative min-h-screen flex justify-center items-center">
        <Image
          src={personBackground}
          className="object-cover -z-10"
          alt="introBackground"
          layout="fill"
          priority={true}
        />

        <div className="relative z-10">
          <div className="flex justify-center items-center text-white">
            <div className="relative">
              <Image
                className="z-30 w-300 h-200"
                src={personBox}
                alt="introBackground"
              />
              {children}
            </div>
          </div>
        </div>
      </div>
    </ClientRecoilRoot>
  );
}
