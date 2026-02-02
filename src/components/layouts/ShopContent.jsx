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
  const [Categories, setCategories] = useState([])
  const [panding, setIspanding] = useState(false);

  //product fetch
  useEffect(() => {
    setIspanding(true);
    async function all() {
      const data = await axios
        .get(
          "https://dummyjson.com/products",
        )
        .then((res) => setMyproducts(res.data.products))
        .catch((error) => {
          // console.log(error.message);
        })
        .finally(() => {
          setIspanding(false);
        });
    }
    all();
  }, []);
  
  //categories
  useEffect(()=>{
    axios("https://dummyjson.com/products/categories")
    .then(res=>setCategories(res.data))
  },[])
  // console.log(Categories)


  return (
    <>
      <div className="">
        <Container>
          <div className="flex items-start">
            <div className="hidden lg:block lg:w-[30%]">
              <Catagories />
              <ColorCatagry />
              <BrandCatagry />
              <PriceCatgry />
            </div>
            <div className="lg:w-[70%] lg:pt-3 pl-3">
              <div className="flex items-center gap-4 justify-end pr-3 lg:pr-0">
                <h3 className="font-normal lg:text-base text-[10px] text-[#767676]">
                  Sort by:
                </h3>
                <div className="relative">
                  <select
                    name="choice"
                    className="border border-[#F0F0F0] w-[90px] lg:w-[200px] text-[#767676fd] text-[10px] lg:text-base px-2 lg:px-5 py-1 lg:py-2 appearance-none focus:outline-none focus:border-gray-300 cursor-pointer"
                  >
                    <option
                      value="Feature"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      Featured
                    </option>
                    <option
                      value="Price Low to High"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      Price Low to High
                    </option>
                    <option
                      value="Price High to Low"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      Price High to Low
                    </option>
                  </select>
                  <FaCaretDown className="text-[10px] lg:text-base absolute top-1/2 -translate-y-1/2 right-1 lg:right-3 pointer-events-none text-[#737373]" />
                </div>
                <div className="relative flex items-center gap-4">
                  <h3 className="font-normal text-[10px] lg:text-base text-[#767676]">
                    Show:
                  </h3>
                  <select
                    name="choice"
                    className="border border-[#F0F0F0] w-60px lg:w-[90px] pl-2 pr-4 lg:pl-4 py-1 lg:py-2 appearance-none focus:outline-none focus:border-gray-300 cursor-pointer lg:text-base text-[#767676] text-[10px]"
                  >
                    <option
                      value="Feature"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      36
                    </option>
                    <option
                      value="Price Low to High"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      40
                    </option>
                    <option
                      value="Price High to Low"
                      className="font-normal text-[10px] lg:text-base text-[#767676]"
                    >
                      50
                    </option>
                  </select>
                  <FaCaretDown className="text-[10px] lg:text-base absolute top-1/2 -translate-y-1/2 right-1 lg:right-3 pointer-events-none text-[#737373]" />
                </div>
              </div>

              {/* ======================================== */}
              <div className=" flex flex-wrap md:justify-between justify-around gap-y-3 pt-2 md:pt-13">
                {myProducts.map((product) => (
                  <div className="w-[150px] md:w-[300px]" key={item.id}>
                    <SingleProduct key={product.id} product={product} />
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
