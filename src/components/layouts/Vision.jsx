import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'

const Vision = () => {
  return (
    <>
    <div className="pt-[50px] pb-[130px]">
        <Container>
            <div className={"flex justify-between"}>
                <div className="w-[33%]">
                    <Heading text={"Our Vision"} as={"h3"} className={"font-bold text-[25px] text-[#262626]"}/>
                    <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."} as={"p"} className={"font-normal text-base text-[#767676] leading-7"}/>
                </div>
                <div className="w-[33%]">
                    <Heading text={"Our Vision"} as={"h3"} className={"font-bold text-[25px] text-[#262626]"}/>
                    <Heading text={"Our Story Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."} as={"p"} className={"font-normal text-base text-[#767676] leading-7"}/>
                </div>
                <div className="w-[33%]">
                    <Heading text={"Our Vision"} as={"h3"} className={"font-bold text-[25px] text-[#262626]"}/>
                    <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."} as={"p"} className={"font-normal text-base text-[#767676] leading-7"}/>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Vision