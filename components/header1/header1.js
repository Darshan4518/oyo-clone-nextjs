import Image from "next/image";
import Block from "./block";

const Header1 = () => {
  return (
    <header className=" h-20 w-full flex justify-between items-center border-b border-y-gray-200">
      <Image
        src={"/logo.png"}
        alt="img"
        width={200}
        height={200}
        priority={true} // {false} | {true}
        className=" md:w-[120px] md:h-[100px] md:mx-10 w-[80px] h-[80px] mx-5"
      />
      <Block />
    </header>
  );
};

export default Header1;
