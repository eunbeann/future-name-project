"use client";

import sending from "@/app/assets/gif/sending1Img.gif";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Sending3() {
  const router = useRouter();
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative xl:w-[90%] rounded-lg overflow-hidden">
        <Image
          className="w-full h-auto rounded-lg"
          src={sending}
          alt="sending"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="absolute -bottom-[76px] flex justify-center xl:w-[100%]">
        <NeonDialog
          sending
          action={() => {
            router.push("/archive");
          }}
        >
          <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000] absolute right-[98px] bottom-[28px]">
            아카이브센터로 가기
          </p>
        </NeonDialog>
      </div>
    </div>
  );
}
