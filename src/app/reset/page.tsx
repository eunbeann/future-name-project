// pages/reset.tsx

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PersonCardProps } from "../list/components/PersonCard";

export default function ResetPage() {
  const [userNames, setUserNames] = useState<PersonCardProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedUserNames = localStorage.getItem("userNames");
    if (storedUserNames) {
      try {
        const parsedUserNames: PersonCardProps[] = JSON.parse(storedUserNames);
        setUserNames(parsedUserNames);
      } catch (error) {
        console.error(
          "로컬 스토리지의 userNames를 파싱하는 중 오류 발생:",
          error
        );
        setUserNames([]);
      }
    }
  }, []);

  const handleDeleteAll = () => {
    if (window.confirm("정말로 모든 userNames를 삭제하시겠습니까?")) {
      localStorage.removeItem("userNames");
      setUserNames([]);
      alert("모든 userNames가 삭제되었습니다.");
    }
  };

  const handleDeleteLast = () => {
    if (userNames.length === 0) {
      alert("삭제할 userName이 없습니다.");
      return;
    }

    if (window.confirm("마지막 userName을 삭제하시겠습니까?")) {
      const updatedUserNames = [...userNames];
      updatedUserNames.pop();
      localStorage.setItem("userNames", JSON.stringify(updatedUserNames));
      setUserNames(updatedUserNames);
      alert("마지막 userName이 삭제되었습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">로컬 스토리지 초기화 페이지</h1>

      <div className="flex space-x-4">
        <button
          onClick={handleDeleteAll}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition border-2"
        >
          모든 데이터 삭제
        </button>
        <button
          onClick={handleDeleteLast}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition  border-2"
        >
          마지막 데이터 삭제
        </button>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition  border-2"
        >
          홈으로 가기
        </button>
      </div>
      <div className="mb-4 w-full max-w-2xl">
        <h2 className="text-xl font-semibold my-4">현재 userNames:</h2>
        {userNames.length > 0 ? (
          <ul className="list-disc list-inside bg-white p-4 rounded shadow">
            {userNames.map((user) => (
              <li key={user.id} className="mb-1">
                <div className="flex flex-col">
                  <span>
                    <strong>ID:</strong> {user.id}
                  </span>
                  <span>
                    <strong>이름:</strong> {user.firstName} {user.lastName}
                  </span>
                  <span>
                    <strong>미래 이름:</strong> {user.futureFirstName}{" "}
                    {user.futureLastName}
                  </span>
                  <span>
                    <strong>날짜:</strong> {user.date}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">userNames가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
