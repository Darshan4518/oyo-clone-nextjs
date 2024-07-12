import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hotel = ({ hotel }) => {
  const [changeImg, setChangeImg] = useState(hotel?.banner);
  return (
    <div className=" border-2 border-gray-300 rounded-lg lg:h-96  mb-5 p-5  ">
      <div className="flex w-[100%] flex-col lg:flex-row gap-x-4">
        <div className="  lg:h-[350px] h-[200px] mr-2 ">
          <Image
            src={changeImg}
            alt="hotel"
            width={200}
            height={200}
            className="lg:w-[65vw] h-full w-full"
          />
        </div>
        <div className="flex lg:flex-col mt-5 lg:mt-0  gap-3">
          {hotel
            ? hotel.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={200}
                    height={200}
                    className=" lg:w-[200px] lg:h-16 object-cover w-[90px] h-10 cursor-pointer"
                    onClick={() => {
                      setChangeImg(ele);
                    }}
                  />
                );
              })
            : ""}
        </div>
        <div className="lg:pl-3 mt-3 lg:mt-0">
          <h2 className="font-bold lg:text-3xl text-lg  line-clamp-1">
            {hotel?.name}
          </h2>
          <p className=" text-justify lg:my-5 lg:text-lg text-sm lg:line-clamp-none line-clamp-3">
            {hotel?.description}
          </p>
          <div className=" text-2xl lg:my-5 my-0 lg:block flex items-center ">
            <span className="lg:font-bold lg:px-0 lg:text-2xl  px-3 font-semibold text-[16px] lg:my-0 my-3">
              Facilities :
            </span>
            <ul className=" flex gap-x-1">
              {hotel
                ? hotel.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" lg:mb-3 flex items-center lg:mt-5 cursor-pointer gap-x-1"
                      >
                        <span>
                          <Image
                            alt="hotel"
                            src={ele?.img}
                            width={200}
                            height={200}
                            className="w-6 h-6 rounded-full"
                          />
                        </span>
                        <span className=" text-sm">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className=" flex items-center">
            <button className=" md:w-60 w-40 md:h-14 h-12 rounded-lg bg-green-400 text-lg text-white  font-bold">
              Price : &#8377; {hotel?.price}
            </button>
            <Link
              href={`/hotels/${hotel?._id}`}
              className="md:text-xl font-bold text-red-600 ml-10 text-lg w-[100px] md:w-[200px] "
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
