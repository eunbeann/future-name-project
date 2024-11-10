"use client";

import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebasedb";
import IdentifyCard from "./components/IdentifyCard";
import PersonCard, { PersonCardProps } from "./components/PersonCard";

export default function ListPage() {
  const [users, setUsers] = useState<PersonCardProps[]>([]);
  const [hoveredUserId, setHoveredUserId] = useState<number | null>(null);

  const data = {
    id: 1729113819018,
    firstName: "은빈",
    lastName: "권",
    futureFirstName: "C740 BE48",
    futureLastName: "AD8C",
    date: "2024-10-16T21:23:39.018Z",
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const reference = ref(db, "users");
      const snapshot = await get(reference);

      if (snapshot.exists()) {
        const usersArray = Object.values(snapshot.val()) as PersonCardProps[];
        setUsers(usersArray);
      } else {
        console.log("데이터가 없습니다.");
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="relative h-[88vh] w-[100vw] overflow-auto">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute left-1/3 h-full border-l-2 border-[#031DDF]"></div>
        <div className="absolute left-2/3 h-full border-l-2 border-[#031DDF]"></div>
      </div>
      <div className="flex flex-wrap flex-col h-[88vh]">
        {users.length > 0 ? (
          users.map((user, key) => (
            <div
              key={key}
              onMouseEnter={() => setHoveredUserId(key)}
              onMouseLeave={() => setHoveredUserId(null)}
              className="w-1/3 px-4"
            >
              <PersonCard
                id={key + 1}
                futureFirstName={user.futureFirstName}
                futureLastName={user.futureLastName}
                date={user.date}
              />
              {hoveredUserId === key && (
                <IdentifyCard
                  id={key + 1}
                  date={user.date}
                  firstName={user.firstName || ""}
                  lastName={user.lastName || ""}
                  newFirstName={user.futureFirstName}
                  newLastName={user.futureLastName}
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-[#ffffff]">Loading....</p>
        )}
      </div>
    </div>
  );
}
