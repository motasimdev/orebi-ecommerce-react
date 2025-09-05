import React from 'react'
import Container from './Container'
import Heading from './Heading'
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
              className={"mx-2 text-[#767676] text-[9px] lg:text-[12px] font-normal"}
            />
            <Heading
              text={"Login"}
              as={"p"}
              className={"text-[#767676] text-[9px] lg:text-[12px] font-normal"}
            />
          </div>
                {/* ========================== */}
          <div className="font-normal text-base text-[#767676] w-[644px] py-[70px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
          </div>
          <div className="h-[1px] text-[#D8D8D8]"></div>
          <div className="py-[60px]">
            <h4 className='font-bold text-[39px] text-[#262626]'>Returning Customer</h4>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Login