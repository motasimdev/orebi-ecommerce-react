import React from "react";
import SingleProduct from "../SingleProduct";
import Container from "../Container";
import Flex from "../Flex";
import cap from "/src/assets/cap.png";
import table from "/src/assets/table.png";
import headphon from "/src/assets/headphone.png";
import glasses from "/src/assets/glasses.png";
import Heading from "../Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrw from "../NextArrw";
import PrevArrw from "../PrevArrw";
import axios from "axios";
import { useState, useEffect } from "react";

const SpecialOffers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
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
      <div className="pb-[110px] hidden lg:block">
        <Container>
          <Heading
            text={"Special Offers"}
            as={"h3"}
            className={"font-bold text-[39px] pb-15 pt-12"}
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

      {/* responsive------------ */}
      <div className="lg:hidden">
        <Container>
          <Heading
            text={"Special Offers"}
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
                    alt={"watchA"}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
      {/* responsive------------end */}
    </>
  );
};

export default SpecialOffers;
