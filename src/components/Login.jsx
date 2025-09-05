import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Flex from "./Flex";
import { IoIosArrowForward } from "react-icons/io";

const Login = () => {
  return (
    <>
      <div className="pt-2 lg:pt-[50px] pb-2 lg:pb-[30px] pl-3 lg:pl-0">
        <Container>
          <Heading
            text={"Login"}
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
              text={"Login"}
              as={"p"}
              className={"text-[#767676] text-[9px] lg:text-[12px] font-normal"}
            />
          </div>

          {/* ========================== */}

          <div className="font-normal text-base text-[#767676] w-[644px] py-[70px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </div>
          <div className="h-[1px] bg-[#D8D8D8]"></div>

          <div className="py-[60px]">
            <Heading
              text={"Returning Customer"}
              as={"p"}
              className={"text-[#262626] text-[10px] lg:text-[39px] font-bold"}
            />

            <Flex className={"gap-x-5 pt-10"}>
              <div className="">
                <Heading
                  text={"Email address"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[39px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="...@gmail.com"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
              <div className="">
                <Heading
                  text={"Password"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[39px] lg:text-[16px] font-bold"
                  }
                />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="*****"
                  className="lg:w-[500px] border-b border-b-[#D8D8D8] py-1 lg:py-3 mb-4 lg:mb-6 focus:outline-none placeholder:text-[10px] lg:placeholder:text-[14px]"
                />
              </div>
            </Flex>
            <button className="cursor-pointer px-20 py-4 border border-[#2B2B2B]">
                <Heading
                  text={"Log in"}
                  as={"p"}
                  className={
                    "text-[#262626] text-[39px] lg:text-[14px] font-bold"
                  }
                />

            </button>
            <div className="h-[1px] bg-[#D8D8D8]"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
