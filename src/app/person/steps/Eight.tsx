import NeonDialog from "@/app/common/NeonDialog";
import CertificationCard from "@/app/list/components/CertificationCard";
import { PersonCardProps } from "@/app/list/components/PersonCard";
import { onValue, ref } from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { db } from "../../../../firebase/firebasedb";

export default function Eight() {
  const [showCertification, setShowCertification] = useState(false);
  const [userArray, setUserArray] = useState<PersonCardProps[]>([]);
  const [user, setUser] = useState<PersonCardProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = useCallback(() => {
    const reference = ref(db, "users/");
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object") {
        const usersArray = Object.entries(data).map(([key, value]) => ({
          ...(value as PersonCardProps),
          uniqueId: key,
        }));

        setUserArray(usersArray);

        const latestUser =
          usersArray.length > 0 ? usersArray[usersArray.length - 1] : null;

        setUser(latestUser);
      }
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("run Effect");
    if (isLoading) {
      getUserData();
      console.log("get data");
    }
  }, [isLoading, getUserData]);

  const handleCertification = () => {
    setShowCertification(true);
  };

  return (
    <>
      <NeonDialog action={handleCertification}>
        <p className="font-dunggeunmo text-[18px] xl:text-[32px] text-[#000000]">
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
      {showCertification && user && (
        <>
          <CertificationCard
            id={userArray.length}
            uniqueId={user.uniqueId}
            date={user.date}
            firstName={user.firstName || ""}
            lastName={user.lastName || ""}
            newFirstName={user.futureFirstName}
            newLastName={user.futureLastName}
          />
        </>
      )}
    </>
  );
}
