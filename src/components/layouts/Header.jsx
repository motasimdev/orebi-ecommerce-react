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
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [category, setCatagory] = useState(false);
  const [logIn, setLogin] = useState(false);
  const [cart, setCart] = useState(false);

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

      {/* responsive menu ----- */}

      <div className="py-[20px] px-3 lg:hidden">
        <Container>
          <div className="">
            <div className="flex justify-between ">
              <button className="cursor-pointer" onClick={() => setMenu(!menu)}>
                {menu ? <RxCross1 /> : <FaBars />}
              </button>
              <Link to={"/"}>
                <Image src={logo} alt={"logo"} className={""} />
              </Link>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out
                
                ${menu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <ul className="bg-gray-200 text-center p-5">
                <Link to={"/"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm py-1.5">
                    Home
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm py-1.5">
                    Shop
                  </li>
                </Link>
                <Link to={"/About"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm py-1.5">
                    About
                  </li>
                </Link>
                <Link to={"/Contact"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm py-1.5">
                    Contact
                  </li>
                </Link>
                <Link to={"/Journal"}>
                  <li className="hover:text-[#262626] text-[#767676] text-sm py-1.5">
                    Journal
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* responsive menu  end */}

      {/* =========== header next ========== */}

      <div className="bg-[#F5F5F3] py-6 hidden lg:block">
        <Container>
          {/* =======catagory========= */}
          <Flex className={"justify-between"}>
            <div className="relative">
              <button
                className="cursor-pointer"
                onClick={() => setCatagory(!category)}
              >
                <div className="flex items-center gap-x-4">
                  <BarCatagory />
                  <Heading
                    className={"text-[#262626] text-sm"}
                    text={"Shop by Category"}
                    as={"h3"}
                  />
                </div>
              </button>
              {category && (
                <>
                  <div
                    className="fixed bg-[#00000038] inset-0 z-10"
                    onClick={() => setCatagory(false)}
                  ></div>
                </>
              )}
              <div
                className={`fixed top-0 left-0 bg-white z-30 w-[300px] h-[100vh] p-2 shadow-2xl transform transition-transform duration-300 
                  ${category ? "translate-x-0" : "-translate-x-full"}`}
              >
                <button
                  className="cursor-pointer"
                  onClick={() => setCatagory(false)}
                >
                  <RxCross1 />
                </button>
                <h3>Men's Fasion</h3>
                <h3>Women's Fasion</h3>
                <h3>Electronics</h3>
                <h3>Food</h3>
              </div>
            </div>
            {/* =======catagory======== */}

            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="p-4 w-[600px] border-none focus:outline-0 bg-white"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 " />
            </div>

            {/* =========login signup ============ */}
            <div className="flex gap-x-3">
              <div className="relative">
                <button
                  className="cursor-pointer"
                  onClick={() => setLogin(!logIn)}
                >
                  <div className="flex">
                    <FaUser />
                    <FaAngleDown />
                  </div>
                </button>
                {logIn && (
                  <>
                    <div
                      className="fixed bg-transparent inset-0 z-10"
                      onClick={() => setLogin(false)}
                    ></div>
                    <div className="absolute top-4.5 right-0 bg-gray-200 z-30 w-[120px] shadow-lg rounded p-2">
                      <Link to={"/login"}>
                      <h3>Log In</h3>
                      </Link>
                      <h3>Sign Up</h3>
                    </div>
                  </>
                )}
              </div>
              {/* =========login signup end ============ */}

              {/* ===========cart============ */}
              <div className="relative">
                <button
                  className="cursor-pointer"
                  onClick={() => setCart(!cart)}
                >
                  <FaShoppingCart />
                </button>
                {cart && (
                  <>
                    <div
                      className="fixed bg-[#00000038] inset-0 z-10"
                      onClick={() => setCart(false)}
                    ></div>
                  </>
                )}
                <div
                  className={`fixed top-0 right-0 w-[210px] h-[100vh] p-2 bg-white shadow-2xl z-30 transform transition-transform duration-300 
                    ${cart ? "translate-x-0" : "translate-x-full"}`}
                >
                  <button
                    className={" cursor-pointer"}
                    onClick={() => setCart(false)}
                  >
                    <RxCross1 />
                  </button>
                  <h3>Item:</h3>
                  <h3>Item Title:</h3>
                  <h3>Item Price:</h3>
                </div>
              </div>
              {/* ===========cart end============ */}
            </div>
          </Flex>
        </Container>
      </div>

      {/* ---------------responsive ------ */}
      <div className="bg-[#F5F5F3] py-6 lg:hidden px-3">
        <Container>
          <Flex className={"justify-between"}>
            <div className="relative">
              <button
                className="cursor-pointer "
                onClick={() => setCatagory(!category)}
              >
                <div className="flex items-center gap-x-2">
                  <BarCatagory />
                  <Heading
                    className={"text-[#262626] text-sm"}
                    text={"Category"}
                    as={"h3"}
                  />
                </div>
              </button>
              {category && (
                <>
                  <div
                    className="fixed bg-[#00000038] inset-0 z-10"
                    onClick={() => setCatagory(false)}
                  ></div>
                </>
              )}
              <div
                className={`fixed top-0 left-0 bg-gray-100 z-30 w-[150px] h-[100vh] p-2 pt-7 transform transition-transform duration-300 
                  ${category ? "translate-x-0" : "-translate-x-full"}`}
              >
                <button
                  className={"cursor-pointer absolute right-3 top-3"}
                  onClick={() => setCatagory(false)}
                >
                  <RxCross1 />
                </button>
                <h3>Men's Fasion</h3>
                <h3>Women's Fasion</h3>
                <h3>Electronics</h3>
                <h3>Food</h3>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="p-1 w-[150px] border-none focus:outline-0 bg-white"
              />
              <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 " />
            </div>

            <div className="flex gap-x-3">
              <div className=" relative">
                <button
                  className="cursor-pointer"
                  onClick={() => setLogin(!logIn)}
                >
                  <div className="flex">
                    <FaUser />
                    <FaAngleDown />
                  </div>
                </button>
                {logIn && (
                  <>
                    <div
                      className="fixed bg-transparent inset-0 z-10"
                      onClick={() => setLogin(false)}
                    ></div>
                    <div className="absolute top-4.5 right-0 bg-gray-200 z-30 w-[80px] p-2">
                      <h3>Log In</h3>
                      <h3>Sign Up</h3>
                    </div>
                  </>
                )}
              </div>

              <div className="relative">
                <button
                  className="cursor-pointer"
                  onClick={() => setCart(!cart)}
                >
                  <FaShoppingCart />
                </button>
                {cart && (
                  <>
                    <div
                      className="fixed bg-[#00000038] inset-0 z-10"
                      onClick={() => setCart(false)}
                    ></div>
                  </>
                )}
                <div
                  className={`fixed top-0 right-0 bg-white z-30 w-[150px] h-[100vh] p-2 transform transition-transform duration-300 
                    ${cart ? "translate-x-0" : "translate-x-full"}`}
                >
                  <button
                    className={"cursor-pointer"}
                    onClick={() => setCart(false)}
                  >
                    <RxCross1 />
                  </button>
                  <h3>Item:</h3>
                  <h3>Item Title:</h3>
                  <h3>Item Price:</h3>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* responsive end ----------- */}
    </>
  );
};

export default Header;
