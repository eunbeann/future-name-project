"use client";

import React, { useEffect, useState } from "react";
import PersonCard, { PersonCardProps } from "./components/PersonCard";

const ListPage: React.FC = () => {
  const [users, setUsers] = useState<PersonCardProps[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("userNames");
    if (storedUsers) {
      try {
        const parsedUsers: PersonCardProps[] = JSON.parse(storedUsers);
        setUsers(parsedUsers);
      } catch (error) {
        console.error("Failed to parse userNames from localStorage:", error);
      }
    }
  }, []);

  return (
    <div className="relative h-[88vh] w-[100vw] overflow-auto">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute left-1/3 h-full border-l-2 border-[#031DDF]"></div>
        <div className="absolute left-2/3 h-full border-l-2 border-[#031DDF]"></div>
      </div>
      <div className="grid grid-rows-3 w-1/3 gap-[8px] relative z-10 p-4">
        {users.length > 0 ? (
          users.map((user, key) => (
            <PersonCard
              key={key}
              id={key}
              futureName={user.futureName}
              date={user.date}
            />
          ))
        ) : (
          <p>No users available.</p>
        )}
      </div>
    </div>
  );
};

export default ListPage;
