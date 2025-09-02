import React from "react";
import { Link } from "react-router";

const BrandCatagry = () => {
  return (
    <>
      <div className="py-10">
        <div className="pb-3">
          <h3 className={"font-bold text-xl text-[#262626]"}>Shop by Color</h3>
        </div>
        <ul>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              Brand 1
            </Link>
          </li>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              Brand 2
            </Link>
          </li>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              Brand 3
            </Link>
          </li>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              Brand 4
            </Link>
          </li>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              Brand 5
            </Link>
          </li>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              Brand 6
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BrandCatagry;
