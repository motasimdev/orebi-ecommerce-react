import React from "react";
import SingleProduct from "../SingleProduct";
import Container from "../Container";
import bag from "/src/assets/bag.png";
import bagTwo from "/src/assets/bagTwo.png";
import Heading from "../Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrw from "../NextArrw";
import PrevArrw from "../PrevArrw";
import axios from "axios";
import { useEffect, useState } from "react";

const BestSellers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
    nextArrow: <NextArrw />,
    prevArrow: <PrevArrw />,
  };
  var mobileSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    nextArrow: <NextArrw />,
    prevArrow: <PrevArrw />,
  };
  var tabSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    nextArrow: <NextArrw />,
    prevArrow: <PrevArrw />,
  };

  const [myProduct, setMyproduct] = useState([]);

  useEffect(() => {
    async function all() {
      let data = await axios.get("https://dummyjson.com/products");
      setMyproduct(data.data.products);
    }

    all();
  }, []);

  return (
    <>
      <div className="pb-6 hidden lg:block">
        <Container className={"overflow-hidden"}>
          <Heading
            text={"Bestsellers"}
            as={"h3"}
            className={"font-bold text-[39px] pb-12 pt-12"}
          />
          <div className="-mx-2">
            <Slider {...settings}>
              {myProduct.map((item) => (
                <div key={item.id} className="px-4">
                  <SingleProduct
                    BadgeText={"10%"}
                    productTitle={item.title}
                    productPrice={`$${item.price}`}
                    imgSrc={item.thumbnail}
                    alt={"watchA"}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>

      {/* responsive md-------------- */}
      <div className="hidden md:block lg:hidden">
        <Container>
          <Heading
            text={"Bestsellers"}
            as={"h3"}
            className={"font-bold text-[25px] py-3 text-center"}
          />
          <div className="bg-gray-100 h-[380px]">
            <Slider {...tabSettings}>
              {myProduct.map((item) => (
                <div key={item.id} className="px-4">
                  <SingleProduct
                    BadgeText={"10%"}
                    productTitle={item.title}
                    productPrice={`$${item.price}`}
                    imgSrc={item.thumbnail}
                    alt={item.title}
                  />
                </div>

              ))}
            </Slider>
          </div>
        </Container>
      </div>
      {/* responsive md--------------end */}

      {/* responsive sm-------------- */}
      <div className="md:hidden">
        <Container>
          <Heading
            text={"Bestsellers"}
            as={"h3"}
            className={"font-bold text-[25px] py-3 text-center"}
          />
          <div className="bg-gray-100 h-[350px]">
            <Slider {...mobileSettings}>
              {myProduct.map((item) => (
                <div key={item.id} className="px-4">
                  <SingleProduct
                    BadgeText={"10%"}
                    productTitle={item.title}
                    productPrice={`$${item.price}`}
                    imgSrc={item.thumbnail}
                    alt={item.title}
                  />
                </div>

              ))}
            </Slider>
          </div>
        </Container>
      </div>
      {/* responsive sm--------------end */}
    </>
  );
};

export default BestSellers;
