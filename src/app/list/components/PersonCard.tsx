import useFormattedTime from "@/hooks/useFormattedTime";

export interface PersonCardProps {
  id: number;
  firstName?: string;
  lastName?: string;
  futureFirstName: string;
  futureLastName: string;
  date: string;
  uniqueId?: string;
  img: string;
}

export default function PersonCard({
  id,
  futureFirstName,
  futureLastName,
  date,
}: PersonCardProps) {
  const time = useFormattedTime(date.toString());
  const padId = String(id).padStart(3, "0");

  return (
    <div className="flex font-pixardisplay justify-between text-white hover:bg-white hover:text-[#031DDF] xl:text-[30px] mr-[3rem] xl:mr-[4.2rem] mb-[8px] xl:w-[539px] w-[339px]">
      <div className="flex">
        <p className="mr-[24px] text-[#ffffff] ">{padId}</p>
        <p className="text-[#ffffff] xl:mr-[4.3rem] overflow-x-scroll scrollbar-hide">{`<${futureLastName} ${futureFirstName}>`}</p>
      </div>
      <p className="text-[#031DDF]">{time}</p>
    </div>
  );
}
