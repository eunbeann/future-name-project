"use client";

import movingPerson from "@/app/assets/gif/movingPerosn.gif";
import NeonDialog from "@/app/common/NeonDialog";
import CertificationCard from "@/app/list/components/CertificationCard";
import { PersonCardProps } from "@/app/list/components/PersonCard";
import { onValue, ref } from "firebase/database";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { db } from "../../../../firebase/firebasedb";

export default function Eight() {
  const [showCertification, setShowCertification] = useState(false);

  const [names, setNames] = useState<PersonCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const lastUser = names.length > 0 ? names[names.length - 1] : null;

  function getUserData() {
    const reference = ref(db, "users/");
    onValue(
      reference,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const usersArray = Object.values(data) as PersonCardProps[];
          setNames(usersArray);
        } else {
          setNames([]);
        }
        setIsLoading(false);
      },
      (error) => {
        console.error("Firebase 데이터 가져오기 오류:", error);
        setNames([]);
        setIsLoading(false);
      }
    );
  }

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    console.log(names);
  }, [names]);

  return (
    <div className="flex flex-col items-center gap-[40px]">
      <Image className="h-[400px]" src={movingPerson} alt="movingPerson" />
      <NeonDialog action={() => setShowCertification(true)}>
        <p className="font-dunggeunmo text-[18px] text-[#000000]">
          <TypeAnimation
            sequence={["개명신청서를 발급 받으세요."]}
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
      {isLoading ? (
        <p>로딩 중...</p>
      ) : (
        showCertification &&
        lastUser && (
          <CertificationCard
            id={names.length}
            date={lastUser.date}
            firstName={lastUser.firstName || ""}
            lastName={lastUser.lastName || ""}
            newFirstName={lastUser.futureFirstName}
            newLastName={lastUser.futureLastName}
          />
        )
      )}
    </div>
  );
}
