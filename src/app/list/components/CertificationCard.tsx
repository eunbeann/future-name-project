import arrow from "@/app/assets/gif/movingArrow.gif";
import certification from "@/app/assets/icon/certification.png";
import { stepNumbers } from "@/app/person/atoms/atoms";
import { format } from "date-fns";
import { getDatabase, ref, update } from "firebase/database";
import html2canvas from "html2canvas";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useRecoilState } from "recoil";

interface CertificationCardProps {
  id: number;
  date: string;
  firstName: string;
  lastName: string;
  newFirstName: string;
  newLastName: string;
  uniqueId?: string;
}

const saveImageToDatabase = (uniqueId: string, imageUrl: string | null) => {
  const db = getDatabase();
  const imageRef = ref(db, `users/${uniqueId}`);
  update(imageRef, { img: imageUrl });
};

export default function CertificationCard({
  id,
  date,
  firstName,
  lastName,
  newFirstName,
  newLastName,
  uniqueId,
}: CertificationCardProps) {
  const formattedDate = date ? format(new Date(date), "MM.dd") : "";
  const webcamRef = useRef<Webcam>(null);
  const captureRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCapturing, setIsCapturing] = useState(false);
  const [step, setStep] = useRecoilState(stepNumbers);

  useEffect(() => {
    if (webcamRef.current) {
      setLoading(false);
    }
  }, [webcamRef]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, []);

  const captureArea = async () => {
    setIsCapturing(true);
    await new Promise((resolve) => setTimeout(resolve, 0));

    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current, {
        useCORS: true,
        allowTaint: true,
        scale: 1,
        backgroundColor: null,
      });
      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "capture.png";
      link.click();
    }

    setIsCapturing(false);
  };

  const handleNextPage = () => {
    if (uniqueId) {
      saveImageToDatabase(uniqueId, url);
    }

    router.push("/get-card");
  };

  return (
    <>
      {/* deem */}
      <div className="fixed -top-[150px] -left-[180px] w-[100vw] h-[100vh] bg-[#000000] bg-opacity-60 z-50" />
      {/* 컨테이너 */}
      <div className="z-50 absolute left-1/2 transform -translate-x-1/2 font-dunggeunmo mb-[50px]">
        {/* 카메라 영역 */}
        <div className="absolute top-[100px] left-[113px] xl:top-[456px] xl:left-[194px]">
          {loading && (
            <div className="bg-[#f1b0b0] w-[132px] h-[204px] text-center xl:w-[223px] xl:h-[322px]">
              <h1 className="text-[#ffffff] xl:text-[20px]">로딩중..</h1>
            </div>
          )}
          {!url && (
            <>
              <Webcam
                className="scale-x-[-1] w-[132px] h-[204px] text-center xl:w-[212px] xl:h-[310px] object-cover"
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                onUserMediaError={(error) =>
                  console.error("Webcam error:", error)
                }
                videoConstraints={{
                  width: 132,
                  height: 208,
                  facingMode: "user",
                }}
              />
              <button
                className="absolute bottom-[0px] ml-[11px] bg-[#ffffff] text-[14px] px-[24px] xl:text-[24px] xl:ml-[31px] xl:bottom-[15px]"
                onClick={capture}
              >
                사진 촬영
              </button>
            </>
          )}
        </div>
        <div ref={captureRef}>
          {url && (
            <div className="absolute top-[300px] left-[115px] xl:top-[456px] xl:left-[194px]">
              <div>
                <Image
                  className="scale-x-[-1] w-[132px] h-[204px] text-center xl:w-[212px] xl:h-[310px] object-cover"
                  width={132}
                  height={140}
                  src={url}
                  alt="Screenshot"
                />
              </div>
              {!isCapturing && (
                <button
                  className="absolute bottom-[0px] ml-[11px] bg-[#ffffff] text-[14px] px-[24px] xl:text-[24px] xl:ml-[31px] xl:bottom-[15px]"
                  onClick={() => setUrl(null)}
                >
                  다시 찍기
                </button>
              )}
            </div>
          )}
          <p className="absolute top-[294px] right-[145px] xl:top-[450px] xl:right-[199px] xl:text-[19px] xl:w-[88px] text-center text-xs leading-0">
            {id}
          </p>
          <p className="absolute top-[322px] right-[125px] text-xs xl:top-[492px] xl:right-[192px] xl:text-[19px] xl:w-[118px] text-center">
            2050.{formattedDate}
          </p>
          <p className="absolute top-[413px] right-[125px] w-[168px] xl:top-[623px] xl:right-[192px] xl:h-[45px] xl:w-[290px] xl:text-[28px] text-center">
            {lastName} {firstName}
          </p>
          <p className="absolute top-[485px] right-[122px] w-[168px] xl:top-[730px] xl:right-[192px] xl:h-[45px] xl:w-[290px] xl:text-[28px] text-center">
            {`${newLastName} ${newFirstName}`}
          </p>
          <Image
            className="w-[580px] h-[855px] xl:w-[940px] xl:h-auto"
            src={certification}
            alt="certification"
          />
        </div>
        <button onClick={() => setStep(step - 1)}>
          <Image
            className="absolute -left-[40px] top-[720px] xl:w-[78px] z-50"
            src={arrow}
            alt="arrow"
          />
        </button>
        <div className="flex gap-[8px] fixed bottom-[0px] left-1/2 transform -translate-x-1/2 xl:text-[34px]">
          <button
            className="w-[230px] xl:w-[340px] py-[16px] bg-[#02FE00] rounded-[22px] border border-[#ffffff] "
            onClick={captureArea}
          >
            이미지 저장하기
          </button>
          <button
            className="w-[230px] xl:w-[340px] py-[16px] bg-[#02FE00] rounded-[22px] border border-[#ffffff] "
            onClick={handleNextPage}
          >
            신분증 받기
          </button>
        </div>
      </div>
    </>
  );
}
