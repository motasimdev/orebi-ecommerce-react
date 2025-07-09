import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import watchA from "/src/assets/watchA.png";
import { Link } from "react-router";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Flex from "./Flex";
import Compare from "../icons/Compare";

const SingleProduct = () => {
  return (
    <>
      <div className="w-[25%] relative group">
        <Image src={watchA} alt={"watchA"} />
        <Badge className={"absolute top-4 left-4"} text={"10%"} />

        {/* ================ */}
        <div className="bg-[#c90909] p-7.5 absolute bottom-0 left-0 w-full translate-y-4 opacity-0 group-hover:opacity-100 hover:translate-y-0 transition-all ease-in-out duration-300">
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
      </div>
    </>
  );
};

export default SingleProduct;
