import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets//logo.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";

const Header = () => {
  return (
    <>
      <div className="bg-amber-400 py-[30px]">
        <Container>
          <Flex>
            <div className="">
              <Image src={logo} alt={"logo"} />
            </div>
            <div className="m-auto">
              <ul className="flex items-center gap-x-[20px]">
                <li className="hover:text-[#262626] text-[#767676] text-sm">Home</li>
                <li className="hover:text-[#262626] text-[#767676] text-sm">Shop</li>
                <li className="hover:text-[#262626] text-[#767676] text-sm">About</li>
                <li className="hover:text-[#262626] text-[#767676] text-sm">Contact</li>
                <li className="hover:text-[#262626] text-[#767676] text-sm">Journal</li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-[#F5F5F3] py-6">
          <Container>
            <Flex>
              <div className="flex items-center gap-x-4">
                <HiMiniBars3BottomLeft/>
                <Heading className={"text-[#262626] text-sm"} text={"Shop by Category"} as={"h3"}/>
              </div>
            </Flex>
          </Container>
      </div>
    </>
  );
};

export default Header;
