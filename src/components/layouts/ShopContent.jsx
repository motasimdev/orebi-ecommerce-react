import React from "react";
import Catagories from "../Catagories";
import Container from "../Container";
import ColorCatagry from "../ColorCatagry";
import BrandCatagry from "../BrandCatagry";
import PriceCatgry from "../PriceCatgry";
import { FaCaretDown } from "react-icons/fa";
import SingleProduct from "../SingleProduct";

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
              <div className="flex items-center gap-4 justify-end">
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
                  <FaCaretDown className="absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none text-[#737373]" />
                </div>
                <div className="relative flex items-center gap-4">
                  <h3 className="font-normal text-base text-[#767676]">
                    Sort by:
                  </h3>
                  <select
                    name="choice"
                    className="border border-[#F0F0F0] w-[90px] pl-4 py-2 appearance-none focus:outline-none focus:border-gray-400 cursor-pointer"
                  >
                    <option
                      value="Feature"
                      className="font-normal text-base text-[#767676]"
                    >
                      36
                    </option>
                    <option
                      value="Price Low to High"
                      className="font-normal text-base text-[#767676]"
                    >
                      40
                    </option>
                    <option
                      value="Price High to Low"
                      className="font-normal text-base text-[#767676]"
                    >
                      50
                    </option>
                  </select>
                  <FaCaretDown className="absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none text-[#737373]" />
                </div>
              </div>

                {/* ======================================== */}
                <SingleProduct />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopContent;
