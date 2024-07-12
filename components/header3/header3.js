"use client";

import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState();

  return (
    <div className=" bg-gradient-to-r from-red-600 to-red-400 h-40 py-2">
      <div className=" p-5">
        <h2 className=" md:text-4xl text-2xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex justify-center my-10 lg:mx-20 md:w-[93%] w-full">
          <input
            type="text"
            placeholder="Search city name...."
            className=" lg:w-[34vw]  md:w-[38vw]  w-full  h-12 outline-none px-3 text-lg border-r-2 border-gray-400 "
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <Link href={`/hotels?city=${city?.toLowerCase()}`}>
            <button
              type="submit"
              className=" h-12 px-3 py-2 w-32 bg-green-600 hover:cursor-pointer hover:bg-green-800 text-white text-xl"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header3;
