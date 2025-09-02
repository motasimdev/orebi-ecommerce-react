import React from "react";
import Catagories from "../Catagories";
import Container from "../Container";
import ColorCatagry from "../ColorCatagry";
import BrandCatagry from "../BrandCatagry";
import PriceCatgry from "../PriceCatgry";
import { FaCaretDown } from "react-icons/fa";

const ShopContent = () => {
  return (
    <>
      <div className="">
        <Container>
          <div className="flex items-start">
            <div className="w-[30%]">
              <Catagories />
              <ColorCatagry />
              <BrandCatagry />
              <PriceCatgry />
            </div>
            <div className="w-[70%] pt-3">
              <div className="flex items-center gap-4">
                <h3 className="font-normal text-base text-[#767676]">
                  Sort by:
                </h3>
                <div className="relative">
                  <select
                    name="choice"
                    className="border border-[#F0F0F0] px-5 py-2 appearance-none focus:outline-none focus:border-gray-400 cursor-pointer"
                  >
                    <option
                      value="Feature"
                      className="font-normal text-base text-[#767676]"
                    >
                      Featured
                    </option>
                    <option
                      value="Price Low to High"
                      className="font-normal text-base text-[#767676]"
                    >
                      Price Low to High
                    </option>
                    <option
                      value="Price High to Low"
                      className="font-normal text-base text-[#767676]"
                    >
                      Price High to Low
                    </option>
                  </select>
                  <FaCaretDown className="absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopContent;
