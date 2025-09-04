import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import { IoIosArrowForward } from "react-icons/io";

const AboutIntro = () => {
  return (
    <div className="pl-3 lg:pl-0 pt-2 lg:pt-[50px] pb-2 lg:pb-[30px]">
      <Container>
        <Heading
          text={"About"}
          as={"h3"}
          className={"text-[#262626] text-[25px] lg:text-[49px] font-bold"}
        />
        <div className="flex items-center pt-1 lg:pt-5">
          <Heading
            text={"Home"}
            as={"p"}
            className={"text-[#767676] text-[9px] lg:text-[12px] font-normal"}
          />
          <IoIosArrowForward
            className={"mx-2 text-[#767676] text-[9px] lg:text-[12px] font-normal"}
          />
          <Heading
            text={"About"}
            as={"p"}
            className={"text-[#767676] text-[9px] lg:text-[12px] font-normal"}
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutIntro;
