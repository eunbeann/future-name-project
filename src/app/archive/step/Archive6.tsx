import dashboard from "@/app/assets/icon/dashboard.png";
import NeonDialog from "@/app/common/NeonDialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";

export default function Archive6() {
  const router = useRouter();

  return (
    <>
      <div className="absolute bottom-[65px] flex justify-center xl:w-[100%] z-50">
        <NeonDialog
          action={() => {
            router.push("/lobby");
          }}
        >
          <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
            <TypeAnimation
              sequence={[
                `화면에는 개인의 정보가 가득하다. 마치 내가 그들의 삶을 훔쳐보는 것만 같다.\n이곳은 가상이 아니야 … 이건 현실이야`,
              ]}
              wrapper="span"
              speed={5}
              style={{
                display: "block",
                whiteSpace: "pre-line",
                color: "black",
              }}
            />
          </p>
        </NeonDialog>
      </div>
      <div className="flex h-full justify-center content-center px-[160px] py-[60px]">
        <Image src={dashboard} alt="background" />;
      </div>
    </>
  );
}
