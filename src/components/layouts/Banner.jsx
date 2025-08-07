import React from "react";
import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrw from "../NextArrw";
import PrevArrw from "../PrevArrw";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="">
            <Link to={"/"}>
              <div className="bg-[url(/src/assets/banner.png)] h-[600px] bg-no-repeat bg-center bg-cover"></div>
            </Link>
          </div>
        </div>
        <div>
          <div className="">
            <Link to={"/"}>
              <div className="bg-[url(/src/assets/banner.png)] h-[600px] bg-no-repeat bg-center bg-cover"></div>
            </Link>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;
