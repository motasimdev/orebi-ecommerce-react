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
            className={"text-[#262626] text-[39px] font-bold"}
          />
          {/* =============== */}
          <Flex className={"gap-x-4"}>
            <div className="flex items-center">
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
            </div>
            <div className="">
              <Heading text={"1 review"} as={"p"} className={""} />
            </div>
          </Flex>

          {/* ==================== */}
          <Flex className={"gap-x-5"}>
            <div className="">
              <Heading text={"$ 88.00"} as={"p"} className={"line-through"} />
            </div>
            <div className="">
              <Heading text={"$ 44.00"} as={"p"} className={""} />
            </div>
          </Flex>
          <div className="w-[780px] h-[1px] bg-[#F0F0F0]"></div>

          {/* ========================= */}
          <Flex>
            <div className="">
              <Heading text={"Color:"} as={"p"} className={""} />
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-[#979797]"></div>
              <div className="w-7 h-7 rounded-full bg-[#FF8686]"></div>
              <div className="w-5 h-5 rounded-full bg-[#7ED321]"></div>
              <div className="w-5 h-5 rounded-full bg-[#B6B6B6]"></div>
              <div className="w-5 h-5 rounded-full bg-[#15CBA5]"></div>
            </div>
          </Flex>

          {/* ======================== */}
          <Flex>
            <Heading text={"Size:"} as={"p"} className={""} />
            <div className="">
              <select defaultValue="S" className="select pr-[70px]">
                <option disabled={true}>S</option>
                <option>L</option>
                <option>Xl</option>
                <option>XXl</option>
              </select>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ProductInfo;
