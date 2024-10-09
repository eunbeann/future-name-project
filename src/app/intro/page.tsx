"use client";
import { useRouter } from "next/navigation";
import PinkButton from "../common/PinkButton";

export default function IntroPage() {
  const router = useRouter();
  return (
    <div className="absolute h-[60vh] w-[50vw] mt-[3rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 bg-[#000000]">
      <p className="text-center text-[#ffffff] pt-[45px] px-[25px] font-dunggeunmo whitespace-pre-wrap">
        {`대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다. 위원은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 국가안전보장회의는 대통령이 주재한다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다.\n \n 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다. 대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. \n 대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한 공무원이 그 직무집행에 있어서 \n \n 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.`}
      </p>
      <button
        className="flex justify-center w-full mt-[15px]"
        onClick={() => {
          router.push("/");
        }}
      >
        <PinkButton text="뒤로가기" />
      </button>
    </div>
  );
}
