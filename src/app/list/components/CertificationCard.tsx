import certification from "@/app/assets/image/certification.png";
import PinkButton from "@/app/common/PinkButton";
import { format } from "date-fns";
import { get, limitToLast, query, ref, remove } from "firebase/database";
import html2canvas from "html2canvas";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { db } from "../../../../firebase/firebasedb";

interface CertificationCardProps {
  id: number;
  date: string;
  firstName: string;
  lastName: string;
  newFirstName: string;
  newLastName: string;
}

const videoConstraints = {
  width: 103,
  height: 156,
  facingMode: "user",
};

export default function CertificationCard({
  id,
  date,
  firstName,
  lastName,
  newFirstName,
  newLastName,
}: CertificationCardProps) {
  const formattedDate = format(new Date(date), "MM.dd");
  const webcamRef = useRef<Webcam>(null);
  const captureRef = useRef<HTMLDivElement>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCapturing, setIsCapturing] = useState(false);

  const handleUserMedia = () => {
    setLoading(false);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  const captureArea = async () => {
    setIsCapturing(true);
    await new Promise((resolve) => setTimeout(resolve, 0));

    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current, {
        useCORS: true,
        allowTaint: true,
        scale: 2,
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

  const deleteLastNameInArray = async () => {
    const reference = ref(db, "users");
    const lastItemQuery = query(reference, limitToLast(1));

    const snapshot = await get(lastItemQuery);
    snapshot.forEach((childSnapshot) => {
      remove(childSnapshot.ref);
    });
  };

  return (
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-dunggeunmo">
      <div className="relative">
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
            videoConstraints={videoConstraints}
            onUserMedia={handleUserMedia}
            onUserMediaError={() => setLoading(false)}
          />
          <button
            className="absolute bottom-[0px] ml-[11px] bg-[#ffffff] text-[14px] px-[24px] "
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
                  onClick={() => {
                    setUrl(null);
                  }}
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
          <p className="absolute top-[349px] right-[137px] text-xs">
            FNM CENTER
          </p>
          <p className="absolute top-[413px] right-[185px] ">
            {lastName} {firstName}
          </p>
          <p className="absolute top-[485px] right-[149px] ">
            {`${newLastName} ${newFirstName}`}
          </p>
          <Image
            className="min-w-[580px] max-w-[580px] h-[855px]"
            src={certification}
            alt="certification"
          />
        </div>

        <div className="absolute flex w-full justify-center gap-[43px] top-[820px] hover:cursor-pointer">
          <button className="hover:cursor-pointer">
            <PinkButton onClick={deleteLastNameInArray} text="다시쓰기" />
          </button>

          <PinkButton onClick={captureArea} text="저장하기" />

          <Link href="/list">
            <PinkButton text="목록 보기" />
          </Link>
        </div>
      </div>
    </div>
  );
}
