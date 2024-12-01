"use client";
import { useState } from "react";
import CertificationCard from "../list/components/CertificationCard";

export default function CameraPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const items = Array.from({ length: 100 }, (_, i) => i + 1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      {/* <div className="w-full h-full flex justify-center items-center bg-violet6"> */}
      {/* {Array(18)
          .fill(0)
          .map((_, index) => ( */}
      {/* <ProfileBack /> */}
      {/* <ProfileChip />
        <ProfileBack /> */}
      {/* ))} */}
      {/* </div> */}
      <CertificationCard
        id={1}
        date={"2021-10-10"}
        firstName={"John"}
        lastName={"Doe"}
        newFirstName={"C544 C9C1"}
        newLastName={"AC15"}
      />

      {/* <div>testPage</div>
      <h1>GRID TEST</h1>
      <div className="w-[92vw] bg-mauve4 h-[750px] overflow-x-auto p-[20px] m-[40px]">
        <div className="flex flex-col flex-wrap gap-4 w-fit h-full">
          {currentItems.map((item) => (
            <div key={item} className="bg-violet7 p-4">
              Content {item}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <button onClick={handlePrevious} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div> */}
    </>
  );
}
