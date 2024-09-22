import useFormattedTime from "@/hooks/useFormattedTime";

export interface PersonCardProps {
  id: number;
  futureName: string;
  date: Date;
}

export default function PersonCard({ id, futureName, date }: PersonCardProps) {
  const time = useFormattedTime(date.toString());
  const padId = String(id).padStart(3, "0");

  return (
    <div className="flex justify-between text-white hover:bg-white hover:text-[#031DDF]">
      <div className="flex">
        <p className="mr-[24px] text-[#ffffff]">{padId}</p>
        <p className="text-[#ffffff]">{`<${futureName}>`}</p>
      </div>
      <p className="text-[#031DDF]">{time}</p>
    </div>
  );
}
