import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets//logo.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser, FaAngleDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { HiBars3CenterLeft } from "react-icons/hi2";
const Contact = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <div className="">
            {/* <div className="">
              <Link to={"/"}>
                <Image src={logo} alt={"logo"} />
              </Link>
            </div> */}
            <button className="cursor-pointer" onClick={() => setMenu(!menu)}>
              <HiBars3CenterLeft />
            </button>
            {menu && (
              <div className="">
                <ul className="bg-amber-200 w-[200px] text-center p-5">
                  <Link to={"/"}>
                    <li className="hover:text-[#262626] text-[#767676] text-sm pb-3">
                      Home
                    </li>
                  </Link>
                  <Link to={"/shop"}>
                    <li className="hover:text-[#262626] text-[#767676] text-sm pb-3">
                      Shop
                    </li>
                  </Link>
                  <Link to={"/About"}>
                    <li className="hover:text-[#262626] text-[#767676] text-sm pb-3">
                      About
                    </li>
                  </Link>
                  <Link to={"/Contact"}>
                    <li className="hover:text-[#262626] text-[#767676] text-sm pb-3">
                      Contact
                    </li>
                  </Link>
                  <Link to={"/Journal"}>
                    <li className="hover:text-[#262626] text-[#767676] text-sm">
                      Journal
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
