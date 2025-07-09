import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import watchA from "/src/assets/watchA.png";
import { Link } from "react-router";
import Heading from "./Heading";
import { FaHeart } from "react-icons/fa";
import Flex from "./Flex";

const SingleProduct = () => {
  return (
    <>
      <div className="w-[25%] relative">
        <Image src={watchA} alt={"watchA"} />
        <Badge className={"absolute top-4 left-4"} text={"10%"} />
        <div className="bg-[#c90909] p-7.5">
          <Link>
            <Flex className={"justify-end gap-x-3"}>
              <Heading text={"Add to Wish List"} as={"p"} className={""} />
              <FaHeart />
            </Flex>
          </Link>
          <Link>
            <Flex className={"justify-end gap-x-3"}>
              <Heading text={"Compare"} as={"p"} className={""} />
              <FaHeart />
            </Flex>
          </Link>
          <Link>
            <Flex className={"justify-end gap-x-3"}>
              <Heading text={"Add to Wish List"} as={"p"} className={""} />
              <FaHeart />
            </Flex>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
