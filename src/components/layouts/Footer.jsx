import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { Link } from "react-router";
import Flex from "../Flex";
import { FaCaretUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-footerBg py-15 hidden lg:block">
        <Container>
          <div className={"flex justify-between"}>
            <div className="w-[10%]">
              <Heading text={"Menu"} as={"h4"} className={"pb-4"} />
              <ul>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                    Home
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                    shop
                  </li>
                </Link>
                <Link to={"/About"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                    About
                  </li>
                </Link>
                <Link to={"/Contact"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                    Contact
                  </li>
                </Link>
                <Link to={"/Journal"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                    Journal
                  </li>
                </Link>
              </ul>
            </div>
            <div className="w-[15%]">
              <Heading text={"Shop"} as={"h4"} className={"pb-4"} />
              <ul>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Category 1
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Category 2
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Category 3
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Category 4
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Category 5
                </li>
              </ul>
            </div>
            <div className="w-[15%]">
              <Heading text={"Shop"} as={"h4"} className={"pb-4"} />
              <ul>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Privacy Policy
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Terms & Conditions
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Special E-shop
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Shipping
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Secure Payments
                </li>
              </ul>
            </div>

            <div className="w-[40%]">
              <Heading
                text={"(052) 611-5711"}
                as={"h4"}
                className={"text-base font-bold text-[#262626] leading-7"}
              />
              <Heading
                text={"company@domain.com"}
                as={"h4"}
                className={"text-base font-bold text-[#262626] leading-7"}
              />
              <Heading
                text={"575 Crescent Ave. Quakertown, PA 18951"}
                as={"p"}
                className={"pt-6"}
              />
            </div>

            <div className="w-[20%]">
              <Image src={logo} alt={logo} />
            </div>
          </div>
        </Container>
      </div>

      {/* responsive------ md sm  */}
      <div className="bg-gray-400 lg:hidden">
        <Container>
          <div className="bg-gray-300 py-2 text-center">
            <a href="#" className="text-sm">
            <FaCaretUp className="m-auto" />
              Tap to Top
            </a>
          </div>
          <Flex className={"p-3"}>
            <div className="w-[50%]">
              <ul>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Orebi.com
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Your Lists
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Gift Cards
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Find a Gift
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Browsing History
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Your Returns
                  </li>
                </Link>
              </ul>
            </div>
            <div className="w-[50%]">
              <ul>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Your Orders
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Orebi Live
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Registry & Gift List
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Your Account
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Customer Service
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-black text-sm pb-2.5">
                    Sell Products
                  </li>
                </Link>
              </ul>
            </div>
          </Flex>
          <div className="bg-gray-500 py-3">
            <div className="text-center flex items-center">
              <p className="text-sm font-medium">Already a customer?</p>
              <a href="#" className="text-sm font-medium">Sign in</a>
            </div>
          </div>
        </Container>
      </div>
      {/* responsive------ md sm end */}
    </>
  );
};

export default Footer;
