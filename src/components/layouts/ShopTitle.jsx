import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { IoIosArrowForward } from "react-icons/io";

const ShopTitle = () => {
  return (
    <>
      <div className="">
        <Container>
          <Heading
            text={"Products"}
            as={"p"}
            className={"text-[49px] font-bold text-[#262626] pt-[50px]"}
          />
          <div className="flex items-center pt-5 pb-[65px]">
            <Heading
              text={"Home"}
              as={"p"}
              className={"text-[#767676] text-[12px] font-normal"}
            />
            <IoIosArrowForward
              className={"mx-2 text-[#767676] text-[12px] font-normal"}
            />
            <Heading
              text={"Shop"}
              as={"p"}
              className={"text-[#767676] text-[12px] font-normal"}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopTitle;
