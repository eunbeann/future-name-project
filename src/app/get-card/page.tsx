"use client";

import arrow from "@/app/assets/gif/movingArrow.gif";
import temp from "@/app/assets/image/cardBackground.png";
import NeonDialog from "@/app/common/NeonDialog";
import { getPrintWindowHTML } from "@/app/get-card/utils/printTemplate";
import { onValue, ref } from "firebase/database";
import html2canvas from "html2canvas";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { db } from "../../../firebase/firebasedb";
import IdentifyCard from "../list/components/IdentifyCard";
import { PersonCardProps } from "../list/components/PersonCard";

export default function GetCardPage() {
  const [user, setUser] = useState<PersonCardProps>();
  const [id, setId] = useState<number>();
  const [showPrintButton, setShowPrintButton] = useState(false);
  const router = useRouter();

  const identifyCardRef = useRef<HTMLDivElement>(null);

  function getUserData() {
    const reference = ref(db, "users/");
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      const usersArray = Object.values(data) as PersonCardProps[];
      setId(usersArray.length);

      const latestUser =
        usersArray.length > 0 ? usersArray[usersArray.length - 1] : null;

      latestUser && setUser(latestUser);
    });
  }

  useEffect(() => {
    getUserData();
  }, []);

  const handlePrintButton = () => {
    setShowPrintButton(true);
  };

  const openPrintWindow = async () => {
    if (!identifyCardRef.current) return;

    try {
      const canvas = await html2canvas(identifyCardRef.current, {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const printWindow = window.open("", "_blank", "width=800,height=600");

      if (printWindow) {
        const htmlContent = getPrintWindowHTML(imgData);
        printWindow.document.write(htmlContent);
        printWindow.document.close();
      }
    } catch (error) {
      console.error("Print failed:", error);
    }
  };

  return (
    <>
      <Image
        className="absolute w-full h-full -z-50"
        src={temp}
        alt="movingPerson"
      />
      <div className="h-[80vh] w-full flex flex-col items-center justify-center gap-[20px]">
        <p className="mt-[12px] text-[25px] font-dunggeunmo text-[#02FE00] xl:text-[48px]">
          신분증 발급
        </p>
        {user && id && (
          <div ref={identifyCardRef}>
            <IdentifyCard
              id={id}
              date={user.date}
              firstName={user.firstName || ""}
              lastName={user.lastName || ""}
              futureFirstName={user.futureFirstName}
              futureLastName={user.futureLastName}
              img={user.img}
              uniqueId={user.uniqueId}
            />
            {showPrintButton && (
              <>
                <Link href="/list">
                  <Image
                    className="absolute left-[1530px] top-[520px] scale-x-[-1] xl:w-[98px]"
                    src={arrow}
                    alt="arrow"
                  />
                </Link>
                card
                <button onClick={() => router.push("/person?from=card")}>
                  <Image
                    className="absolute left-[420px] top-[520px] xl:w-[98px]"
                    src={arrow}
                    alt="arrow"
                  />
                </button>
              </>
            )}
          </div>
        )}
        {showPrintButton ? (
          <button
            className="w-[460px] xl:w-[800px] py-[8px] bg-[#02FE00] rounded-[8px] border border-[#ffffff] font-dunggeunmo text-[18px] xl:text-[42px] text-[#000000]"
            onClick={openPrintWindow}
          >
            출력하기
          </button>
        ) : (
          <NeonDialog action={handlePrintButton} getCard>
            <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
              <TypeAnimation
                sequence={[
                  `새 신분증이 발급된다. 그 위엔 내가 알던 이름 대신 낯선 코드만이 새겨져 있다.\n이게… 정말 나의 정체성인가?`,
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
        )}
      </div>
    </>
  );
}
