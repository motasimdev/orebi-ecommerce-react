import React from "react";
import Image from "../Image";
import productOne from "/src/assets/aboutOne.png";
import productTwo from "/src/assets/aboutTwo.png";
import Container from "../Container";
import Flex from "../Flex";

const AboutProduct = () => {
  return (
    <>
      <div className="pt-[90px] pb-[65px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-49%">
              <Image src={productOne} alt={"productOne"} />
            </div>
            <div className="w-49%">
              <Image src={productTwo} alt={"productTwo"} />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default AboutProduct;
