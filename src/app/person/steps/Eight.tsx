import CertificationCard from "@/app/list/components/CertificationCard";
import { PersonCardProps } from "@/app/list/components/PersonCard";
import { onValue, ref } from "firebase/database";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { db } from "../../../../firebase/firebasedb";

export default function Eight() {
  const [showCertification, setShowCertification] = useState(false);
  const router = useRouter();

  const [names, setNames] = useState<PersonCardProps[]>([]);
  const lastUser = names.length > 0 && names[names.length - 1];

  function getUserData() {
    const reference = ref(db, "users/");
    onValue(reference, (snapshot) => {
      const usersArray = Object.values(snapshot.val()) as PersonCardProps[];
      setNames(usersArray);
    });
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <p className="absolute left-9 top-[380px] font-dunggeunmo text-[#02FE00] text-[32px] text-center w-[760px]">
        <TypeAnimation
          sequence={["개명신청서를 받으시겠습니까?"]}
          wrapper="span"
          speed={5}
          style={{ display: "inline-block", whiteSpace: "pre-line" }}
        />
      </p>
      {showCertification && lastUser && (
        <CertificationCard
          id={names.length}
          date={lastUser.date}
          firstName={lastUser.firstName || ""}
          lastName={lastUser.lastName || ""}
          newFirstName={lastUser.futureFirstName}
          newLastName={lastUser.futureLastName}
        />
      )}
      <div className="absolute left-[18%] bottom-[3.6rem] ">
        <div className="flex gap-7 font-dunggeunmo">
          <button
            onClick={() => router.push("/list")}
            className="w-[18rem] h-[4.7rem]  text-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center cursor-pointer"
          >
            끝내기
          </button>
          <button
            onClick={() => setShowCertification(true)}
            className="w-[18rem] h-[4.7rem] bg-[#02FE00] text-[25px] border-2 border-[#02FE00] text-center cursor-pointer"
          >
            받기
          </button>
        </div>
      </div>
    </div>
  );
}
