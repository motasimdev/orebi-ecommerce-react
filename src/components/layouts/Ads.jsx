import React from "react";
import Image from "../Image";
import Container from "../Container";
import Flex from "../Flex";
import adONe from "/src/assets/lightProduct.png";
import adTwo from "/src/assets/watchProduct.png";
import adThree from "/src/assets/lampProduct.png";
import { Link } from "react-router";

const Ads = () => {
  return (
    <>
      <div className="pt-[170px] pb-[65px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[49%]">
              <Link to={"/"}>
                <Image src={adONe} alt={"adOne"} className={"w-full"} />
              </Link>
            </div>
            <div className="w-[49%]">
              <Link to={"/"}>
                <Image src={adTwo} alt={"adTwo"} className={"w-full pb-8"} />
              </Link>
              <Link to={"/"}>
                <Image src={adThree} alt={"adThree"} className={"w-full"} />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Ads;
