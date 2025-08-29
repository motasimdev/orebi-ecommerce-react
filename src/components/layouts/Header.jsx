import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets//logo.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { FaSearch, FaUser, FaAngleDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa6";
import BarCatagory from "../../assets/icons/BarCatagory";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [category, setCatagory] = useState(false);
  return (
    <>
      <div className="py-[30px] hidden lg:block">
        <Container>
          <Flex>
            <div className="">
              <Link to={"/"}>
                <Image src={logo} alt={"logo"} />
              </Link>
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
                <Link to={"/About"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm">
                    About
                  </li>
                </Link>
                <Link to={"/Contact"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm">
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
          </Flex>
        </Container>
      </div>

      {/* responsive menu  */}

      <div className="py-[20px] lg:hidden px-3">
        <Container>
          <div className="">
            <div className="flex justify-between ">
              <button className="cursor-pointer" onClick={() => setMenu(!menu)}>
                <FaBars />
              </button>
              <Link to={"/"}>
                <Image src={logo} alt={"logo"} className={""} />
              </Link>
            </div>
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
      {/* responsive menu end */}

      {/* =========== header next ========== */}
      <div className="bg-[#F5F5F3] py-6 hidden lg:block">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-4">
              <BarCatagory />
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

      {/* responsive ------ */}
      <div className="bg-[#F5F5F3] py-6 lg:hidden px-3">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-2 relative">
              <button
                className="cursor-pointer "
                onClick={() => setCatagory(!category)}
              >
                <BarCatagory />
              </button>
              <Heading
                className={"text-[#262626] text-sm"}
                text={"Category"}
                as={"h3"}
              />
              {category && (
                <div className="absolute top-4.5 left-0 bg-teal-100 z-30 w-[100px] p-2">
                  <h3>Men's Fasion</h3>
                  <h3>Women's Fasion</h3>
                  <h3>Electronics</h3>
                  <h3>Food</h3>
                </div>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="p-2 w-[150px] border-none focus:outline-0 bg-white"
              />
              <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 " />
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
      {/* responsive end ----------- */}
    </>
  );
};

export default Header;
