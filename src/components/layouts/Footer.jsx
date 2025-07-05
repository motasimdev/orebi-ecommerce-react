import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import logo from "/src/assets/logo.png"

const Footer = () => {
  return (
    <>
      <div className="bg-footerBg py-15">
        <Container>
          <div className={"flex justify-between"}>
            <div className="w-[10%]">
              <Heading text={"Menu"} as={"h4"} className={"pb-4"} />
              <ul>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Home
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Shop
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  About
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Contact
                </li>
                <li className="hover:text-[#262626] text-[#767676] text-sm pb-2.5">
                  Journal
                </li>
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
              <Heading text={"(052) 611-5711"} as={"h4"} className={"text-base font-bold text-[#262626] leading-7"}/>
              <Heading text={"company@domain.com"} as={"h4"} className={"text-base font-bold text-[#262626] leading-7"}/>
              <Heading text={"575 Crescent Ave. Quakertown, PA 18951"} as={"p"} className={"pt-6"}/>
            </div>

            <div className="w-[20%]">
              <Image src={logo} alt={logo}/>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
