"use client";

import listBackground from "@/app/assets/image/listBackground.png";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  },
  {
    id: 2,
    firstName: "민수",
    lastName: "김",
    futureFirstName: "A123 B456",
    futureLastName: "C789",
    date: "2024-10-20T18:45:12.345Z",
  },
];

export default function ListPage() {
  const [users, setUsers] = useState<PersonCardProps[]>([]);
  const [hoveredUserId, setHoveredUserId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 78;

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const currentItems = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (totalPages > 0 && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    const repeatedMockUsers = Array(50)
      .fill(mockUsers)
      .flat()
      .map((user, i) => ({
        ...user,
        id: i + 1,
      }));

    setUsers(repeatedMockUsers);
  }, []);

  return (
    <MainContainer>
      <Image
        className="absolute -z-50 w-full h-full rounded-b-[12px]"
        src={listBackground}
        alt="listBackground"
      />
      <div className="flex flex-col flex-wrap w-[94%] h-full overflow-y-hidden py-[20px]">
        {currentItems.length > 0 ? (
          currentItems.map((user) => (
            <div
              key={user.id}
              onMouseEnter={() => setHoveredUserId(user.id)}
              onMouseLeave={() => setHoveredUserId(null)}
              className="px-4"
            >
              <PersonCard
                id={user.id}
                futureFirstName={user.futureFirstName}
                futureLastName={user.futureLastName}
                date={user.date}
              />
              {hoveredUserId === user.id && (
                <IdentifyCard
                  id={user.id}
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
        {currentPage === 1 ? (
          <button
            onClick={handleNext}
            className="absolute right-4 bottom-1/2 w-[50px] h-[50px] bg-green9"
          >
            {">"}
          </button>
        ) : (
          <button
            onClick={handlePrevious}
            className="absolute right-4 bottom-1/2 w-[50px] h-[50px] bg-green9"
          >
            {"<"}
          </button>
        )}
      </div>
    </MainContainer>
  );
}
