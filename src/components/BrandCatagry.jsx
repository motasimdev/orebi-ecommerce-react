import React from "react";
import { Link } from "react-router";

const BrandCatagry = () => {
  return (
    <>
      <div className="pb-10 lg:pb-0  lg:py-10">
        <div className="pb-3">
          <h3 className={"font-bold text-md lg:text-xl text-[#262626]"}>Shop by Brand</h3>
        </div>
        <ul>
          <Link to={""}>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-3 lg:py-5">
            <p className="text-sm lg:text-base font-normal text-[#767676] pl-0 lg:pl-2">
              Brand 1
            </p>
          </li>
          </Link>
          <Link to={""}>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-3 lg:py-5">
            <p className="text-sm lg:text-base font-normal text-[#767676] pl-0 lg:pl-2">
              Brand 2
            </p>
          </li>
          </Link>
          <Link to={""}>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-3 lg:py-5">
            <p className="text-sm lg:text-base font-normal text-[#767676] pl-0 lg:pl-2">
              Brand 3
            </p>
          </li>
          </Link>
          <Link to={""}>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-3 lg:py-5">
            <p className="text-sm lg:text-base font-normal text-[#767676] pl-0 lg:pl-2">
              Brand 4
            </p>
          </li>
          </Link>
          <Link to={""}>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-3 lg:py-5">
            <p className="text-sm lg:text-base font-normal text-[#767676] pl-0 lg:pl-2">
              Brand 5
            </p>
          </li>
          </Link>
          <Link to={""}>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-3 lg:py-5">
            <p className="text-sm lg:text-base font-normal text-[#767676] pl-0 lg:pl-2">
              Brand 6
            </p>
          </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default BrandCatagry;
