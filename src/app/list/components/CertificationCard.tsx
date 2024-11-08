import certification from "@/app/assets/image/certification.png";
import PinkButton from "@/app/common/PinkButton";
import { format } from "date-fns";
import { get, limitToLast, query, ref, remove } from "firebase/database";

import Image from "next/image";
import Link from "next/link";
import { db } from "../../../../firebase/firebasedb";

interface CertificationCardProps {
  id: number;
  date: string;
  firstName: string;
  lastName: string;
  newFirstName: string;
  newLastName: string;
}

export default function CertificationCard({
  id,
  date,
  firstName,
  lastName,
  newFirstName,
  newLastName,
}: CertificationCardProps) {
  const formattedDate = format(new Date(date), "MM.dd");

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
        <Image
          className="min-w-[580px] max-w-[580px] h-[855px]"
          src={certification}
          alt="certification"
        />
        <p className="absolute top-[294px] right-[143px] text-xs text-white">
          {id}
        </p>
        <p className="absolute top-[322px] right-[125px] text-xs text-white">
          2100.{formattedDate}
        </p>
        <p className="absolute top-[349px] right-[137px] text-xs text-white">
          FNM CENTER
        </p>
        <p className="absolute top-[413px] right-[185px] text-white">
          {lastName} {firstName}
        </p>
        <p className="absolute top-[485px] right-[149px] text-white">
          {`${newLastName} ${newFirstName}`}
        </p>
        <div>
          <div className="absolute flex w-full justify-center gap-[43px] top-[820px] hover:cursor-pointer">
            <button
              className="hover:cursor-pointer"
              onClick={deleteLastNameInArray}
            >
              <PinkButton text="다시쓰기" />
            </button>
            <Link href="/list">
              <PinkButton
                text="저장하기"
                onClick={() => {
                  alert("수정필요");
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
