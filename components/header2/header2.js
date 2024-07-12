const Header2 = () => {
  const List = [
    {
      name: "Banglore",
    },
    {
      name: "Culcutta",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Hyderabad",
    },
  ];
  return (
    <div>
      <div className="flex md:px-10 px-2 py-3 gap-x-2 bg-gray-100 justify-between">
        {List.map((e) => {
          return <span key={e.name}>{e.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Header2;
