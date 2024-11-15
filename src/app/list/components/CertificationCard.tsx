import certification from "@/app/assets/image/certification.png";
import { format } from "date-fns";
import { getDatabase, ref, update } from "firebase/database";
import html2canvas from "html2canvas";
import Image from "next/image";
import Link from "next/link";
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

      if (uniqueId) {
        saveImageToDatabase(uniqueId, url);
      }

      const link = document.createElement("a");
      link.href = image;
      link.download = "capture.png";
      link.click();
    }

    setIsCapturing(false);
  };

  return (
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-dunggeunmo ga">
      {/* <div className="relative "> */}
      <div className="absolute top-[300px] left-[119px]">
        {loading && (
          <div className="bg-[#000000] w-[132px] h-[204px] text-center">
            <h1 className="text-[#ffffff]">로딩중..</h1>
          </div>
        )}
        <Webcam
          className="transform scale-x-[-1]"
          audio={false}
          width={132}
          height={180}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ width: 103, height: 154, facingMode: "user" }}
        />
        <button
          className="absolute bottom-[0px] ml-[11px] bg-[#ffffff] text-[14px] px-[24px]"
          onClick={capture}
        >
          사진 촬영
        </button>
      </div>
      <div ref={captureRef}>
        {url && (
          <div className="absolute top-[301px] left-[119px]">
            <div>
              <Image
                className="transform scale-x-[-1]"
                width={132}
                height={140}
                src={url}
                alt="Screenshot"
              />
            </div>
            {!isCapturing && (
              <button
                className="absolute bottom-[0px] ml-[11px] bg-[#ffffff] text-[14px] px-[24px] "
                onClick={() => setUrl(null)}
              >
                다시 찍기
              </button>
            )}
          </div>
        )}
        <p className="absolute top-[294px] right-[145px] text-xs leading-0">
          {id}
        </p>
        <p className="absolute top-[322px] right-[125px] text-xs">
          2100.{formattedDate}
        </p>
        <p className="absolute top-[349px] right-[137px] text-xs">FNM CENTER</p>
        <p className="absolute top-[413px] right-[125px] w-[168px] text-center">
          {lastName} {firstName}
        </p>
        <p className="absolute top-[485px] right-[125px] w-[168px] text-center">
          {`${newLastName} ${newFirstName}`}
        </p>
        <Image
          className="min-w-[580px] max-w-[580px] h-[855px]"
          src={certification}
          alt="certification"
        />
      </div>
      <button
        className="w-[460px] h-[40px] bg-[#02FE00] rounded-[8px] border border-[#ffffff] fixed bottom-[0px] left-1/2 transform -translate-x-1/2"
        onClick={captureArea}
      >
        저장하기
      </button>
      <Link
        href={"/get-card"}
        className="w-[40px] h-[40px] bg-[#02FE00] rounded-[8px] border border-[#ffffff] fixed right-[0px] -translate-y-1/2 top-1/2 flex justify-center items-center"
      >
        {">"}
      </Link>
      {/* </div> */}
    </div>
  );
}
