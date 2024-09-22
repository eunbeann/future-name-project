import fncIcon from "@/app/assets/icon/fncLogo.png";
import listBackground from "@/app/assets/image/listBackground.png";
import Image from "next/image";
import ClientRecoilRoot from "../common/ClientRecoilRoot";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Image
        className="fixed bottom-0 w-full h-[100vh] -z-50"
        src={listBackground}
        alt="introBackground"
        priority={true}
        draggable="false"
      />
      <div className="relative z-10">
        <ClientRecoilRoot>{children}</ClientRecoilRoot>
      </div>
      <Image
        className="fixed bottom-[90px] right-5 w-[230px] h-[190px] -z-50"
        src={fncIcon}
        alt="logoIcon"
      />
    </>
  );
}
