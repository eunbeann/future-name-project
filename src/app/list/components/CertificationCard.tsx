import arrow from "@/app/assets/gif/movingArrow.gif";
import certification from "@/app/assets/icon/certification.png";
import { format } from "date-fns";
import { getDatabase, ref, update } from "firebase/database";
import html2canvas from "html2canvas";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

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
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-dunggeunmo ga">
      <div className="absolute top-[300px] left-[119px] xl:top-[473px] xl:left-[201px]">
        {loading && (
          <div className="bg-[#f1b0b0] w-[132px] h-[204px] text-center xl:w-[223px] xl:h-[322px]">
            <h1 className="text-[#ffffff] xl:text-[20px]">로딩중..</h1>
          </div>
        )}
        {!url && (
          <>
            <Webcam
              className="scale-x-[-1] w-[132px] h-[204px] text-center xl:w-[223px] xl:h-[322px]"
              audio={false}
              width={223}
              height={322}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              onUserMediaError={(error) =>
                console.error("Webcam error:", error)
              }
              videoConstraints={{ width: 132, height: 208, facingMode: "user" }}
            />
            <button
              className="absolute bottom-[0px] ml-[11px] bg-[#ffffff] text-[14px] px-[24px] xl:text-[24px] xl:ml-[36px] xl:bottom-[12px]"
              onClick={capture}
            >
              사진 촬영
            </button>
          </>
        )}
      </div>
      <div ref={captureRef}>
        {url && (
          <div className="absolute top-[300px] left-[119px] xl:top-[473px] xl:left-[210px]">
            <div>
              <Image
                className="scale-x-[-1] w-[132px] h-[204px] text-center xl:w-[205px] xl:h-[322px]"
                width={132}
                height={140}
                src={url}
                alt="Screenshot"
              />
            </div>
            {!isCapturing && (
              <button
                className="absolute bottom-[0px] ml-[11px] bg-[#ffffff] text-[14px] px-[24px] xl:text-[24px] xl:ml-[28px] xl:bottom-[12px]"
                onClick={() => setUrl(null)}
              >
                다시 찍기
              </button>
            )}
          </div>
        )}
        <p className="absolute top-[294px] right-[145px] xl:top-[466px] xl:right-[199px] xl:text-[19px] xl:w-[88px] text-center text-xs leading-0">
          {id}
        </p>
        <p className="absolute top-[322px] right-[125px] text-xs xl:top-[509px] xl:right-[200px] xl:text-[19px] xl:w-[118px] text-center ">
          2100.{formattedDate}
        </p>
        <p className="absolute top-[349px] right-[137px] text-xs xl:top-[556px] xl:right-[200px] xl:w-[156px] xl:text-[19px] text-center">
          FNM CENTER
        </p>
        <p className="absolute top-[413px] right-[125px] w-[168px] xl:top-[650px] xl:right-[203px] xl:h-[45px] xl:w-[280px] xl:text-[28px] text-center ">
          {lastName} {firstName}
        </p>
        <p className="absolute top-[485px] right-[125px] w-[168px] xl:top-[762px] xl:right-[204px] xl:h-[45px] xl:w-[280px] xl:text-[28px] text-center">
          {`${newLastName} ${newFirstName}`}
        </p>
        <Image
          className="w-[580px] h-[855px] xl:w-[980px] xl:h-auto"
          src={certification}
          alt="certification"
        />
      </div>
      <button
        className="w-[460px] xl:w-[780px] py-[8px] bg-[#02FE00] rounded-[22px] border border-[#ffffff] fixed bottom-[0px] left-1/2 transform -translate-x-1/2 xl:text-[30px] "
        onClick={captureArea}
      >
        저장하기
      </button>
      <button
        onClick={handleNextPage}
        className="w-[40px] h-auto xl:w-[64px] bg-[#02FE00] rounded-[8px] border border-[#ffffff] fixed right-[0px] -translate-y-1/2 top-1/2 flex justify-center items-center scale-x-[-1]"
      >
        <Image src={arrow} alt="arrow" />
      </button>
    </div>
  );
}
