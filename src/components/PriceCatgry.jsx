import React from 'react'
import { Link } from 'react-router'

const PriceCatgry = () => {
  return (
    <>
    <div className="py-10">
        <div className="pb-3">
          <h3 className={"font-bold text-xl text-[#262626]"}>Shop by Price</h3>
        </div>
        <ul>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              $0.00 - $9.99
            </Link>
          </li>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              $10.00 - $19.99
            </Link>
          </li>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              $20.00 - $29.99
            </Link>
          </li>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              $30.00 - $39.99
            </Link>
          </li>
          <li className="flex items-center w-[370px] border-b border-b-[#D8D8D8] py-5">
            <Link className="text-base font-normal text-[#767676] pl-2">
              $40.00 - $69.99
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PriceCatgry