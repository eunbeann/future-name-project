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
    <div className="flex font-pixardisplay justify-between text-white hover:bg-white hover:text-[#031DDF] w-[330px]">
      <div className="flex">
        <p className="mr-[24px] text-[#ffffff]">{padId}</p>
        <p className="text-[#ffffff] overflow-x-scroll scrollbar-hide">{`<${futureLastName} ${futureFirstName}>`}</p>
      </div>
      <p className="text-[#031DDF]">{time}</p>
    </div>
  );
}
