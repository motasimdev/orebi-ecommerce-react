import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import { IoIosArrowForward } from "react-icons/io";

const AboutIntro = () => {
  return (
    <div className="pt-[140px] pb-[90px]">
      <Container>
        <Heading
          text={"About"}
          as={"h3"}
          className={"text-[#262626] text-[49px] font-bold pb-6"}
        />
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
            text={"About"}
            as={"p"}
            className={"text-[#767676] text-[12px] font-normal"}
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutIntro;
