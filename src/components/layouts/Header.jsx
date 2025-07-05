import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets//logo.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser, FaAngleDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Flex>
            <div className="">
              <Image src={logo} alt={"logo"} />
            </div>
            <div className="m-auto">
              <ul className="flex items-center gap-x-[20px]">
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm">
                    Home
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm">
                    Shop
                  </li>
                </Link>
                <li className="hover:text-[#262626] text-[#767676] text-sm">
                  About
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm">
                  Contact
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm">
                  Journal
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-[#F5F5F3] py-6">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-4">
              <HiMiniBars3BottomLeft />
              <Heading
                className={"text-[#262626] text-sm"}
                text={"Shop by Category"}
                as={"h3"}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="p-4 w-[600px] border-none focus:outline-0 bg-white"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 " />
            </div>

            <div className="flex gap-x-3">
              <div className="flex">
                <FaUser />
                <FaAngleDown />
              </div>
              <FaShoppingCart />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
