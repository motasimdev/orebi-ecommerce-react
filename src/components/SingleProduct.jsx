import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import { Link } from "react-router";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Flex from "./Flex";
import Compare from "../icons/Compare";

const SingleProduct = ({BadgeText, imgSrc, alt, productTitle, productPrice }) => {
  return (
    <>
      <div className="relative group px-5">
        <Image src={imgSrc} alt={alt} />
        <Badge className={"absolute top-4 left-4"} text={BadgeText} />

        {/* ================ */}
        <div className="bg-white p-7.5 absolute bottom-9 left-0 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <Link>
            <Flex className={"justify-end gap-x-3 "}>
              <Heading text={"Add to Wish List"} as={"p"} className={"text-[#767676] text-base"} />
              <FaHeart />
            </Flex>
          </Link>
          <Link>
            <Flex className={"justify-end gap-x-3 my-3 "}>
              <Heading text={"Compare"} as={"p"} className={"text-[#767676] text-base"} />
              <Compare/>
            </Flex>
          </Link>
          <Link>
            <Flex className={"justify-end gap-x-3 "}>
              <Heading text={"Add to Cart"} as={"p"} className={"text-[#767676] text-base"} />
              <FaShoppingCart  />
            </Flex>
          </Link>
        </div>
        <div className="bg-white py-3">
                <Flex className={"justify-between"}>
                    <Heading text={productTitle} as={"h3"} className={"text-5 text-[#262626] font-bold"}/>
                    <Heading text={productPrice} as={"h3"} className={"text-4 text-[#767676]"}/>
                </Flex>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
