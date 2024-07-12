"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Filters = ({ price, setPrice, handlePrice, checkList, setCheckList }) => {
  const [list, setList] = useState();
  const getFacilities = async () => {
    try {
      const { data } = await axios.get("/api/facilities");
      if (data?.facilities) {
        setList(data.facilities);
      }
    } catch (error) {
      console.log("get facilities error");
    }
  };
  useEffect(() => {
    getFacilities();
  }, []);
  const handleCheckList = (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setCheckList(newList);
      return;
    }
    newList = newList.filter((i) => i !== e.target.value);
    setCheckList(newList);
  };
  return (
    <div className=" border-2 border-red-500 rounded-md m-5 h-[60vh] py-10 px-3 w-[60%] hidden xl:block">
      <label htmlFor="price" className=" text-xl mr-3 font-bold">
        Price :
      </label>
      <input
        type="range"
        name="price"
        id="price"
        min={500}
        max={3500}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        defaultValue={price ? price : 0}
      />
      <span className=" ml-10">&#8377; {price}</span>
      <div>
        <button
          className=" w-40 h-10 bg-green-300 cursor-pointer mt-10 ml-6"
          onClick={handlePrice}
        >
          Search
        </button>
      </div>
      <div className=" my-10 ">
        <h3 className=" text-xl font-bold my-3">Filter by Facilities : </h3>
        {list?.map((e) => {
          return (
            <p key={e} className="grid grid-cols-8 my-5 mx-2">
              <label htmlFor="checkbox" className=" col-span-2">
                {e}
              </label>
              <input
                type="checkbox"
                name="ckeckbox"
                id="checkbox"
                value={e}
                className=" w-5 h-5 ml-3 col-span-1"
                onChange={handleCheckList}
              />
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
