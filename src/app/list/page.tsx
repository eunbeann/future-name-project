"use client";

import listBackground from "@/app/assets/image/listBackground.png";
import { onValue, ref } from "firebase/database";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { db } from "../../../firebase/firebasedb";
import MainContainer from "../common/MainContainer";
import IdentifyCard from "./components/IdentifyCard";
import PersonCard, { PersonCardProps } from "./components/PersonCard";
const mockUsers: PersonCardProps[] = [
  {
    id: 1,
    firstName: "은빈",
    lastName: "권",
    futureFirstName: "C740 BE48",
    futureLastName: "AD8C",
    date: "2024-10-16T21:23:39.018Z",
    img: "https://randomuser.me/api/portraits",
  },
  {
    id: 2,
    firstName: "민수",
    lastName: "김",
    futureFirstName: "A123 B456",
    futureLastName: "C789",
    date: "2024-10-20T18:45:12.345Z",
    img: "https://randomuser.me/api/portraits",
  },
];

export default function ListPage() {
  const [users, setUsers] = useState<PersonCardProps[]>([]);
  const [hoveredUserId, setHoveredUserId] = useState<string | null>(null);

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
  }, []);

  // useEffect(() => {
  //   const repeatedMockUsers = Array(50)
  //     .fill(mockUsers)
  //     .flat()
  //     .map((user, i) => ({
  //       ...user,
  //       id: i + 1,
  //     }));

  //   setUsers(repeatedMockUsers);
  // }, []);

  return (
    <MainContainer>
      <Image
        className="absolute -z-50 w-full h-full rounded-b-[12px]"
        src={listBackground}
        alt="listBackground"
      />
      <div>
        <button
          onClick={() => {}}
          className="absolute left-4 bottom-1/2 w-[50px] h-[50px] bg-green9"
        >
          {"<"}
        </button>
        <div className="flex flex-col flex-wrap w-content h-full overflow-y-hidden py-[20px] ml-[80px]">
          {users.length > 0 ? (
            users.map((user, idx) => (
              <div
                key={user.uniqueId}
                onMouseEnter={() => setHoveredUserId(user.uniqueId || null)}
                onMouseLeave={() => setHoveredUserId(null)}
                className="px-4 w-fit"
              >
                <PersonCard
                  id={idx + 1}
                  futureFirstName={user.futureFirstName}
                  futureLastName={user.futureLastName}
                  date={user.date}
                  img={user.img}
                />
                {hoveredUserId === user.uniqueId && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <IdentifyCard
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
      </div>
    </MainContainer>
  );
}
