import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { IoIosArrowForward } from "react-icons/io";
import Flex from "../Flex";
import { FaCaretDown } from "react-icons/fa";

const SignUp = () => {
  return (
    <>
      <div className="pt-2 lg:pt-[50px] pb-2 lg:pb-[30px] pl-3 lg:pl-0">
        <Container className={"overflow-hidden"}>
          <Heading
            text={"Sign up"}
            as={"p"}
            className={"text-[25px] lg:text-[49px] font-bold text-[#262626]"}
          />
          <div className="flex items-center pt-1 lg:pt-5 lg:pb-[65px]">
            <Heading
              text={"Home"}
              as={"p"}
              className={"text-[#767676] text-[9px] lg:text-[12px] font-normal"}
            />
            <IoIosArrowForward
              className={
                "mx-2 text-[#767676] text-[9px] lg:text-[12px] font-normal"
              }
            />
            <Heading
              text={"Shop"}
              as={"p"}
              className={"text-[#767676] text-[9px] lg:text-[12px] font-normal"}
            />
          </div>

          {/* ================================ */}
          <div className="w-[350px] lg:w-[644px] py-6 lg:py-[50px]">
            <Heading
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the."
              }
              as={"h3"}
              className={
                "text-[#767676] text-[10px] lg:text-[16px] font-normal"
              }
            />
          </div>
          <div className="h-[1px] bg-[#D8D8D8]"></div>

          {/* =============================== personal details */}
          <div className="py-5 lg:py-[50px]">
            <Heading
              text={"Your Personal Details"}
              as={"p"}
              className={"text-[#262626] text-[20px] lg:text-[39px] font-bold"}
            />

            <Flex className={"gap-x-5 pt-5 lg:pt-10"}>
              <div className="">
                <Heading
                  text={"First Name"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
              <div className="">
                <Heading
                  text={"Last Name"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
            </Flex>
            <Flex className={"gap-x-5 pt-3 lg:pt-6"}>
              <div className="">
                <Heading
                  text={"Email address"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="company@domain.com"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
              <div className="">
                <Heading
                  text={"Telephone"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Your phone number"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
            </Flex>
          </div>
          <div className="h-[1px] bg-[#D8D8D8]"></div>

          {/* =============new customer========== end */}
          <div className="py-5 lg:py-[60px]">
            <Heading
              text={"New Customer"}
              as={"p"}
              className={"text-[#262626] text-[20px] lg:text-[39px] font-bold"}
            />

            <Flex className={"gap-x-5 pt-5 lg:pt-10"}>
              <div className="">
                <Heading
                  text={"Address 1"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="4279 Zboncak Port Suite 6212"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
              <div className="">
                <Heading
                  text={"Address 2"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="—"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
            </Flex>
            <Flex className={"gap-x-5 pt-3 lg:pt-6"}>
              <div className="">
                <Heading
                  text={"City"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your city"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
              <div className="">
                <Heading
                  text={"Post Code"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="05228"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
            </Flex>

            {/* ============== */}

            <Flex className={"gap-x-5 pt-3 lg:pt-6"}>
              <div className="">
                <Heading
                  text={"Division"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold pb-4"
                  }
                />
                <div className="relative">
                  <select
                    name="choice"
                    className="border border-[#F0F0F0] w-[90px] lg:w-[500px] text-[#767676fd] text-[10px] lg:text-base px-2 lg:px-5 py-1 lg:py-2 appearance-none focus:outline-none focus:border-gray-300 cursor-pointer"
                  >
                    <option
                      value="Feature"
                      className="font-normal text-[10px] lg:text-base text-[#767676] hidden"
                    >
                      Please select
                    </option>
                    <option
                      value="Price Low to High"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      Dhaka
                    </option>
                    <option
                      value="Price High to Low"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      Chattogram
                    </option>
                  </select>
                  <FaCaretDown className="text-[10px] lg:text-base absolute top-1/2 -translate-y-1/2 right-1 lg:right-3 pointer-events-none text-[#737373]" />
                </div>
              </div>
              <div className="">
                <Heading
                  text={"District"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold pb-4"
                  }
                />
                <div className="relative">
                  <select
                    name="choice"
                    className="border border-[#F0F0F0] w-[90px] lg:w-[500px] text-[#767676fd] text-[10px] lg:text-base px-2 lg:px-5 py-1 lg:py-2 appearance-none focus:outline-none focus:border-gray-300 cursor-pointer"
                  >
                    <option
                      value="Feature"
                      className="font-normal text-[10px] lg:text-base text-[#767676] hidden"
                    >
                      Please select
                    </option>
                    <option
                      value="Price Low to High"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      Dhaka
                    </option>
                    <option
                      value="Price High to Low"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      Noakhali
                    </option>
                  </select>
                  <FaCaretDown className="text-[10px] lg:text-base absolute top-1/2 -translate-y-1/2 right-1 lg:right-3 pointer-events-none text-[#737373]" />
                </div>
              </div>
            </Flex>

            {/* ====================*/}
          </div>

          <div className="h-[1px] bg-[#D8D8D8]"></div>
          

          <div className="py-5 lg:py-[60px]">
            <Heading
              text={"New Customer"}
              as={"p"}
              className={"text-[#262626] text-[20px] lg:text-[39px] font-bold"}
            />

            <Flex className={"gap-x-5 pt-5 lg:pt-10"}>
              <div className="">
                <Heading
                  text={"Address 1"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="4279 Zboncak Port Suite 6212"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
              <div className="">
                <Heading
                  text={"Address 2"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[12px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="—"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
            </Flex>
          </div>
          <button className="cursor-pointer px-10 lg:px-20 py-1 lg:py-4 border border-[#2B2B2B] mt-6">
            <Heading
              text={"Sign up"}
              as={"p"}
              className={"text-[#262626] text-[12px] lg:text-[14px] font-bold"}
            />
          </button>
          {/* =============new customer========== end */}
          {/* =============================== personal details end */}
        </Container>
      </div>
    </>
  );
};

export default SignUp;
