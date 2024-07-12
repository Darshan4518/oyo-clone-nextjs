"use client";
import Filters from "@/components/filter/filter";
import Header1 from "@/components/header1/header1";
import Hotel from "@/components/hotels/hotel";
import axios from "axios";
import { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(800);
  const [list, setList] = useState([]);
  const [checkList, setCheckList] = useState([]);

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);
    if (data?.hotels) {
      setList(data?.hotels);
    }
  };

  const handleCheckList = async () => {
    const { data } = await axios.get(`/api/facilities/search?val=${checkList}`);
    if (data?.hotels) {
      const newList = data.hotels;
      setList(newList);
    }
  };
  useEffect(() => {
    handleCheckList();
  }, [checkList]);

  return (
    <div>
      <Header1 />
      <div className=" flex w-full ">
        <Filters
          price={price}
          setPrice={setPrice}
          handlePrice={handlePrice}
          checkedList={checkList}
          setCheckList={setCheckList}
        />
        <div>
          {list.length > 0
            ? list.map((hotel) => {
                return (
                  <div className=" m-3 w-[90%]" key={hotel._id}>
                    <Hotel hotel={hotel} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((hotel) => {
                return (
                  <div className=" m-3 w-[90%]" key={hotel._id}>
                    <Hotel hotel={hotel} />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Hotels;

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
    );
    const data = await res.json();
    return {
      props: {
        hotels: data.hotels || data.allhotels,
      },
    };
  } catch (error) {
    console.log("city search error");
  }
}
