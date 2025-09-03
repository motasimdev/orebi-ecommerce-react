import React from "react";
import { Link } from "react-router";

const ColorCatagry = () => {
  return (
    <>
      <div className="py-10">
        <div className="pb-3">
          <h3 className={"font-bold text-xl text-[#262626]"}>Shop by Color</h3>
        </div>
        <ul>
          <Link to={""}>
            <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
              <div className="h-2.5 w-2.5 bg-black rounded-full"></div>
              <p className="text-base font-normal text-[#767676] pl-2">
                color 1
              </p>
            </li>
          </Link>
          <Link to={""}>
            <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
              <div className="h-2.5 w-2.5 bg-yellow-300 rounded-full"></div>
              <p className="text-base font-normal text-[#767676] pl-2">
                color 2
              </p>
            </li>
          </Link>
          <Link to={""}>
            <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
              <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div>
              <p className="text-base font-normal text-[#767676] pl-2">
                color 3
              </p>
            </li>
          </Link>
          <Link to={""}>
            <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
              <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
              <p className="text-base font-normal text-[#767676] pl-2">
                color 4
              </p>
            </li>
          </Link>
          <Link to={""}>
            <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
              <div className="h-2.5 w-2.5 bg-gray-700 rounded-full"></div>
              <p className="text-base font-normal text-[#767676] pl-2">
                color 5
              </p>
            </li>
          </Link>
          <Link to={""}>
            <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
              <div className="h-2.5 w-2.5 bg-teal-400 rounded-full"></div>
              <p className="text-base font-normal text-[#767676] pl-2">
                color 6
              </p>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default ColorCatagry;
