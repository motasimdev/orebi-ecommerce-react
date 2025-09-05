import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className="pt-2 lg:pt-[50px] pb-2 lg:pb-[30px] pl-3 lg:pl-0">
        <Container>
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
              className={"mx-2 text-[#767676] text-[9px] lg:text-[12px] font-normal"}
            />
            <Heading
              text={"Shop"}
              as={"p"}
              className={"text-[#767676] text-[9px] lg:text-[12px] font-normal"}
            />
          </div>

          {/* ================================ */}
           <div className="w-[350px] lg:w-[644px] py-6 lg:py-[70px]">
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

          {/* =============================== personal details */}
          <div className="py-5 lg:py-[60px]">
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
            <Flex className={"gap-x-5 pt-5 lg:pt-10"}>
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
            <button className="cursor-pointer px-10 lg:px-20 py-1 lg:py-4 border border-[#2B2B2B]">
              <Heading
                text={"Log in"}
                as={"p"}
                className={
                  "text-[#262626] text-[12px] lg:text-[14px] font-bold"
                }
              />
            </button>
          </div>
          {/* =============================== personal details end */}
        </Container>
      </div>
    </>
  )
}

export default SignUp