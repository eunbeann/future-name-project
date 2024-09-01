import PersonCard from "./components/PersonCard";

export default function ListPage() {
  const personCards = Array.from({ length: 100 }, (_, index) => (
    <PersonCard key={index} />
  ));

  return (
    //TODO h값 수정
    <div className="px-[54px] flex-wrap h-[1670px] w-[100vw] bg-black">
      {personCards}
    </div>
  );
}
