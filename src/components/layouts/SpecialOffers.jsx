import React from 'react'
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
    prevArrow: <PrevArrw />
  };


  return (
    <>
    <div className="pb-[110px]">
        <Container>
          <Heading
            text={"Special Offers"}
            as={"h3"}
            className={"font-bold text-[39px] pb-15 pt-12"}
          />
          <div className="-mx-2">
            <Slider {...settings}>
              <div className="px-2">
                <SingleProduct
                  BadgeText={"10%"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  imgSrc={cap}
                  alt={"cap"}
                /><Heading
                  text={"black"}
                  as={"p"}
                  className={"text-4 text-[#767676]"}
                />
              </div>
              <div className="px-2">
                <SingleProduct
                  BadgeText={"10%"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  imgSrc={table}
                  alt={"table"}
                /><Heading
                  text={"black"}
                  as={"p"}
                  className={"text-4 text-[#767676]"}
                />
              </div>
              <div className="px-2">
                <SingleProduct
                  BadgeText={"10%"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  imgSrc={headphon}
                  alt={"headphon"}
                /><Heading
                  text={"black"}
                  as={"p"}
                  className={"text-4 text-[#767676]"}
                />
              </div>
              <div className="px-2">
                <SingleProduct
                  BadgeText={"10%"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  imgSrc={glasses}
                  alt={"glasses"}
                /><Heading
                  text={"black"}
                  as={"p"}
                  className={"text-4 text-[#767676]"}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  )
}

export default SpecialOffers