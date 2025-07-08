import React from "react";
import Heading from "../Heading";
import { IoIosArrowForward } from "react-icons/io";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import productOne from "/src/assets/productOne.png";
import productThree from "/src/assets/productThree.png";
import productTwo from "/src/assets/productTwo.png";
import productFour from "/src/assets/productFour.png";

const ShowProduct = () => {
  return (
    <>
      <Container>
        <div className="flex items-center">
          <Heading
            text={"Home"}
            as={"p"}
            className={"text-[#767676] text-[12px] font-normal"}
          />
          <IoIosArrowForward
            className={"mx-2 text-[#767676] text-[12px] font-normal"}
          />
          <Heading
            text={"Products"}
            as={"p"}
            className={"text-[#767676] text-[12px] font-normal"}
          />
        </div>

        <div className="pt-[130px] pb-7">
          <Container>
            <Flex className={"justify-between"}>
              <div className="w-[49%]">
                <Image
                  src={productOne}
                  alt={"productOne"}
                  className={"pb-5"}
                />
                <Image
                  src={productThree}
                  alt={"productTwo"}
                  className={""}
                />
              </div>

              {/* =======div two======= */}
              <div className="w-[49%]">
                <Image
                  src={productTwo}
                  alt={"productOne"}
                  className={"pb-5"}
                />
                <Image
                  src={productFour}
                  alt={"productTwo"}
                  className={""}
                />
              </div>
            </Flex>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default ShowProduct;
