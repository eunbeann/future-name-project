export default function PersonCard() {
  const person = {
    id: 3,
    name: "g791 h802 i913",
    createTime: "15:30 AM",
  };

  return (
    <div className="flex text-white text-[25px]">
      <p className="mr-[27px]">{person.id}</p>
      <p className="mr-[110px]">{`<${person.name}>`}</p>
      <p className="text-[#031DDF]">{person.createTime}</p>
    </div>
  );
}
