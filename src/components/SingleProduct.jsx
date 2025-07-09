import React from 'react'
import Badge from './Badge'
import Image from './Image'
import watchA from '/src/assets/watchA.png'

const SingleProduct = () => {
  return (
    <>
    <div className="w-[25%] relative">
        <Image src={watchA} alt={"watchA"}/>
        <Badge className={"absolute top-4 left-4"} text={"10%"}/>
        <div className="bg-[#FFFFFF] p-7.5"></div>
    </div>

    </>
  )
}

export default SingleProduct