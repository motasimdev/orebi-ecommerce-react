import React, { useEffect, useState } from "react";
import Catagories from "../Catagories";
import Container from "../Container";
import ColorCatagry from "../ColorCatagry";
import BrandCatagry from "../BrandCatagry";
import PriceCatgry from "../PriceCatgry";
import { FaCaretDown } from "react-icons/fa";
import SingleProduct from "../SingleProduct";
import axios from "axios";

const ShopContent = () => {
  const [myProducts, setMyproducts] = useState([]);

  useEffect(() => {
    async function all() {
      const data = await axios.get("https://dummyjson.com/products?limit=15&skip=10&select=title,price,thumbnail");
      setMyproducts(data.data.products);
    }
    all();
  }, []);

  return (
    <>
      <div className="">
        <Container>
          <div className="flex items-start">
            <div className="w-[30%]">
              <Catagories />
              <ColorCatagry />
              <BrandCatagry />
              <PriceCatgry />
            </div>
            <div className="w-[70%] pt-3">
              <div className="flex items-center gap-4 justify-end">
                <h3 className="font-normal text-base text-[#767676]">
                  Sort by:
                </h3>
                <div className="relative">
                  <select
                    name="choice"
                    className="border border-[#F0F0F0] w-[200px] px-5 py-2 appearance-none focus:outline-none focus:border-gray-400 cursor-pointer"
                  >
                    <option
                      value="Feature"
                      className="font-normal text-base text-[#767676]"
                    >
                      Featured
                    </option>
                    <option
                      value="Price Low to High"
                      className="font-normal text-base text-[#767676]"
                    >
                      Price Low to High
                    </option>
                    <option
                      value="Price High to Low"
                      className="font-normal text-base text-[#767676]"
                    >
                      Price High to Low
                    </option>
                  </select>
                  <FaCaretDown className="absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none text-[#737373]" />
                </div>
                <div className="relative flex items-center gap-4">
                  <h3 className="font-normal text-base text-[#767676]">
                    Sort by:
                  </h3>
                  <select
                    name="choice"
                    className="border border-[#F0F0F0] w-[90px] pl-4 py-2 appearance-none focus:outline-none focus:border-gray-400 cursor-pointer"
                  >
                    <option
                      value="Feature"
                      className="font-normal text-base text-[#767676]"
                    >
                      36
                    </option>
                    <option
                      value="Price Low to High"
                      className="font-normal text-base text-[#767676]"
                    >
                      40
                    </option>
                    <option
                      value="Price High to Low"
                      className="font-normal text-base text-[#767676]"
                    >
                      50
                    </option>
                  </select>
                  <FaCaretDown className="absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none text-[#737373]" />
                </div>
              </div>

              {/* ======================================== */}
              <div className=" flex flex-wrap justify-between gap-y-3 pt-13">
                {myProducts.map((item) => (
                  <div className="w-[300px]" key={item.id}>
                    <SingleProduct
                      imgSrc={item.thumbnail}
                      alt={item.thumbnail}
                      productPrice={item.price}
                      productTitle={item.title}
                      BadgeText={"10%"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopContent;
