import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import { FaStar } from "react-icons/fa";

const ProductInfo = () => {
  return (
    <>
      <div className="pt-[30px] pb-6">
        <Container>
          <Heading
            text={"Product"}
            as={"h3"}
            className={"text-[#262626] text-[39px] font-bold pb-6"}
          />
          {/* =============== */}
          <Flex className={"gap-x-4"}>
            <div className="flex items-center">
              <FaStar className="text-[#FFD881] text-sm" />
              <FaStar className="text-[#FFD881] text-sm" />
              <FaStar className="text-[#FFD881] text-sm" />
              <FaStar className="text-[#FFD881] text-sm" />
              <FaStar className="text-[#FFD881] text-sm" />
            </div>
            <div className="">
              <Heading
                text={"1 review"}
                as={"p"}
                className={"text-sm text-[#767676]"}
              />
            </div>
          </Flex>

          {/* ==================== */}
          <Flex className={"gap-x-5"}>
            <div className="py-7">
              <Heading
                text={"$ 88.00"}
                as={"p"}
                className={"line-through text-[#767676]"}
              />
            </div>
            <div className="">
              <Heading
                text={"$ 44.00"}
                as={"p"}
                className={"text-[#262626] text-2xl font-bold"}
              />
            </div>
          </Flex>
          <div className="w-[780px] h-[1px] bg-[#F0F0F0]"></div>

          {/* ========================= */}
          <div className="py-7">
            <Flex>
              <div className="">
                <Heading
                  text={"Color:"}
                  as={"p"}
                  className={"pr-[50px] uppercase text-base font-bold text-[#262626]"}
                />
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-[#979797] mr-[12px]"></div>
                <div className="w-7 h-7 rounded-full bg-[#FF8686] mr-[12px]"></div>
                <div className="w-5 h-5 rounded-full bg-[#7ED321] mr-[12px]"></div>
                <div className="w-5 h-5 rounded-full bg-[#B6B6B6] mr-[12px]"></div>
                <div className="w-5 h-5 rounded-full bg-[#15CBA5]"></div>
              </div>
            </Flex>
          </div>

          {/* ======================== */}
          <div className="">
            <Flex>
              <Heading text={"Size:"} as={"p"} className={"uppercase pr-[70px] text-base font-bold text-[#262626]"} />
              <div className="">
                <select defaultValue="S" className="select pr-[70px]">
                  <option disabled={false}>S</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductInfo;
