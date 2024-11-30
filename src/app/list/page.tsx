"use client";

import arrow from "@/app/assets/gif/movingArrow.gif";
import listBackground from "@/app/assets/image/listBackground.png";
import { onValue, ref } from "firebase/database";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { db } from "../../../firebase/firebasedb";
import MainContainer from "../common/MainContainer";
import IdentifyCard from "./components/IdentifyCard";
import PersonCard, { PersonCardProps } from "./components/PersonCard";

export default function ListPage() {
  const [users, setUsers] = useState<PersonCardProps[]>([]);
  const [clickedUserId, setClickedUserId] = useState<string | null>(null);
  const router = useRouter();

  const getUserData = useCallback(() => {
    const reference = ref(db, "users/");
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object") {
        const usersArray = Object.entries(data).map(([key, value]) => ({
          ...(value as PersonCardProps),
          uniqueId: key,
        }));

        setUsers(usersArray);
      }
    });
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <MainContainer bgImage={listBackground}>
      <button
        className="absolute left-[45px] bottom-1/2 w-[50px] h-[50px] xl:h-[72px] xl:w-[72px]"
        onClick={() => router.back()}
      >
        <Image src={arrow} alt="arrow" />
      </button>
      <div className="flex flex-col flex-wrap content-start max-w-[93%] h-full overflow-y-hidden py-[23px] ml-[80px] xl:ml-[160px] xl:pt-[3rem]">
        {users.length > 0 ? (
          users.map((user, idx) => (
            <div
              key={user.uniqueId}
              // onMouseEnter={() => setHoveredUserId(user.uniqueId || null)}
              // onMouseLeave={() => setHoveredUserId(null)}
              onClick={() => setClickedUserId(user.uniqueId || null)}
              className="px-0"
            >
              <PersonCard
                id={idx + 1}
                futureFirstName={user.futureFirstName}
                futureLastName={user.futureLastName}
                date={user.date}
                img={user.img}
              />
              {clickedUserId === user.uniqueId && (
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setClickedUserId(null);
                  }}
                >
                  <IdentifyCard
                    isList
                    id={idx + 1}
                    date={user.date}
                    firstName={user.firstName || ""}
                    lastName={user.lastName || ""}
                    futureFirstName={user.futureFirstName}
                    futureLastName={user.futureLastName}
                    img={user.img}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-[#ffffff]">Loading....</p>
        )}
      </div>
    </MainContainer>
  );
}
