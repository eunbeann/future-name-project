import PersonCard from "./components/PersonCard";

export default function ListPage() {
  const personCards = Array.from({ length: 400 }, (_, index) => (
    <PersonCard key={index} />
  ));

  return (
    <>
      <div> </div>
      <div className="px-[54px] flex flex-col flex-wrap h-[88vh] w-[100vw] overflow-x-auto scrollbar-hide border-r-2 ">
        {personCards}
      </div>
    </>
  );
}
