const ListItem = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="pb-8">
      <li className="pb-2">{name}</li>
      <div className="w-full bg-[#fafaea] h-2">
        <div className={`h-full bg-[#1D231E]`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ListItem;
