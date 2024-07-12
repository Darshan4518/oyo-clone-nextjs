"use client";
import Header1 from "@/components/header1/header1";
import Cookies from "js-cookie";
import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";

const SingleHotel = ({ hotel }) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
  }, [auth]);
  const [changeImg, setChangeImg] = useState(hotel?.banner);

  console.log(changeImg);

  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <Header1 />
      <div className="w-full m-auto px-5 mx-auto my-2 border-2 border-gray-200 rounded-lg ">
        <Image
          src={changeImg}
          priority={true} // {false} | {true}
          alt="hotel"
          width={2000}
          height={2000}
          className="md:w-[80vw] md:h-[80vh] h-[300px]  m-auto  my-2"
        />

        <div className="flex my-10  gap-3 md:w-[80%] mx-auto ">
          {hotel
            ? hotel.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={200}
                    height={200}
                    className=" md:w-[200px] md:h-20 object-cover w-[80px] h-10 cursor-pointer"
                    onClick={() => {
                      setChangeImg(ele);
                    }}
                  />
                );
              })
            : ""}
        </div>
        <div className=" md:w-[82%] m-auto pt-2">
          <h3 className=" text-3xl font-bold">{hotel?.name}</h3>
          <p className=" text-xl my-5 text-justify">{hotel?.description}</p>
          <button className=" w-60 h-14 rounded-lg bg-green-400 text-lg font-bold">
            Price : &#8377; {hotel?.price}
          </button>
          <p className=" text-3xl font-bold my-5">Facilities : </p>
          <ul className=" flex text-xl justify-between">
            {hotel
              ? hotel.facilities?.map((ele) => {
                  return (
                    <li
                      key={ele.name}
                      className=" mr-10 mb-3 flex items-center"
                    >
                      <span>
                        <Image
                          alt="img"
                          src={ele.img}
                          width={200}
                          height={200}
                          className="w-8 h-8 rounded-full"
                        />
                      </span>
                      <span className="ml-5">{ele.name}</span>
                    </li>
                  );
                })
              : ""}
          </ul>
          <div className=" my-5">
            {!auth ? (
              <Link href={`/payment/${hotel._id}`}>
                <button className=" w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
                  Book Now
                </button>
              </Link>
            ) : (
              <span className=" text-2xl py-3">
                Please
                <Link href={"/login"} className=" text-blue-500 px-1">
                  Log in
                </Link>
                to get new Offers ! & Book the Hotel
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/hotels/${ctx.query.id}`
    );
    const data = await res.json();
    return {
      props: {
        hotel: data.hotel,
      },
    };
  } catch (error) {
    console.log("city id error");
  }
}
export default SingleHotel;
