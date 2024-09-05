export default function PersonCard() {
  const person = {
    id: 3,
    name: "g791 h802 i913",
    createTime: "15:30 AM",
  };

  return (
    <div className="W-1/3 flex text-white text-[25px] pr-[30px] mr-[30px] border-r-2 border-[#031DDF] hover:bg-white hover:text-[#031DDF]">
      <p className="mr-[27px]">{person.id}</p>
      <p className="mr-[110px]">{`<${person.name}>`}</p>
      <p className="text-[#031DDF]">{person.createTime}</p>
    </div>
  );
}
