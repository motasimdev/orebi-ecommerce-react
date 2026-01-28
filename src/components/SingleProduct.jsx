import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import { Link } from "react-router";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Flex from "./Flex";
import Compare from "../icons/Compare";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../features/cart/cartSlice";

const SingleProduct = ({ product }) => {
  const { id, BadgeText, thumbnail, title, price } = product || {};
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //===========addToCart============
  const handleAddToCart = () => {
    const isExist = cart.some(item => item.id === id);
    if (isExist) return toast.warn("This product already exist in your cart");
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Product added in your cart");
  };
  return (
    <>
      <div className="relative group px-5">
        {thumbnail ? <Image src={thumbnail} alt={title} /> : "Product Image"}
        <Badge className={"absolute top-4 left-4"} text={BadgeText} />

        {/* ================ */}
        <div className="bg-white p-7.5 hidden lg:block absolute bottom-9 left-0 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <Link>
            <Flex className={"justify-end gap-x-3 "}>
              <Heading
                text={"Add to Wish List"}
                as={"p"}
                className={"text-[#767676] text-base"}
              />
              <FaHeart />
            </Flex>
          </Link>
          <Link to={`/product/${id}`}>
            <Flex className={"justify-end gap-x-3 my-3 "}>
              <Heading
                text={"View Details"}
                as={"p"}
                className={"text-[#767676] text-base"}
              />
              <Compare />
            </Flex>
          </Link>
          <Link>
            <Flex className={"justify-end gap-x-3 "}>
              <button
                onClick={handleAddToCart}
                className={"text-[#767676] text-base cursor-pointer"}
              >
                Add to Cart
              </button>
              <FaShoppingCart />
            </Flex>
          </Link>
        </div>
        <div className="py-3">
          <Flex className={"justify-between"}>
            <Heading
              text={title}
              as={"h3"}
              className={
                "text-[12px] lg:text-5 text-[#262626] font-bold line-clamp-1"
              }
            />
            <Heading
              text={price}
              as={"h3"}
              className={"text-[10px] lg:text-4 text-[#767676]"}
            />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
