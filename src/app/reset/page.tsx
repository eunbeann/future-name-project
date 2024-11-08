"use client";

import {
  get,
  limitToLast,
  onValue,
  query,
  ref,
  remove,
} from "firebase/database";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebasedb";
import { PersonCardProps } from "../list/components/PersonCard";

export default function ResetPage() {
  const [userNames, setUserNames] = useState<PersonCardProps[]>([]);
  const router = useRouter();

  function getUserData() {
    const reference = ref(db, "users/");
    onValue(reference, (snapshot) => {
      const usersArray = Object.values(snapshot.val()) as PersonCardProps[];
      setUserNames(usersArray);
    });
  }

  useEffect(() => {
    getUserData();
  }, []);

  function deleteAllUserData() {
    const reference = ref(db, "users/");

    onValue(reference, (snapshot) => {
      if (snapshot.exists()) {
        remove(reference)
          .then(() => {
            console.log("모든 데이터가 성공적으로 삭제되었습니다.");
            setUserNames([]);
          })
          .catch(() => {
            alert("데이터 삭제 중 오류가 발생했습니다:");
          });
      } else {
        console.log("삭제할 데이터가 없습니다.");
      }
    });
  }

  async function deleteLastUserData() {
    const reference = ref(db, "users/");
    const lastItemQuery = query(reference, limitToLast(1));

    try {
      const snapshot = await get(lastItemQuery);

      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          remove(childSnapshot.ref)
            .then(() => {
              console.log("마지막 데이터가 성공적으로 삭제되었습니다.");
            })
            .catch((error) => {
              console.error("데이터 삭제 중 오류가 발생했습니다:", error);
            });
        });
      } else {
        console.log("삭제할 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("데이터 가져오는 중 오류가 발생했습니다:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">로컬 스토리지 초기화 페이지</h1>

      <div className="flex space-x-4">
        <button
          onClick={deleteAllUserData}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition border-2"
        >
          모든 데이터 삭제
        </button>
        <button
          onClick={deleteLastUserData}
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
                    <strong>이름:</strong> {user.lastName}
                    {user.firstName}
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
