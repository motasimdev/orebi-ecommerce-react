import React from "react";
import SingleProduct from "../SingleProduct";
import Container from "../Container";
import bag from "/src/assets/bag.png";
import bagTwo from "/src/assets/bagTwo.png";
import jar from "/src/assets/jar.png";
import hamandista from "/src/assets/hamandista.png";
import Heading from "../Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BestSellers = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <div className="pb-6">
        <Container>
          <Heading
            text={"Bestsellers"}
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
                  imgSrc={jar}
                  alt={"jar"}
                />
                <Heading
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
                  imgSrc={bag}
                  alt={"bag"}
                />
                <Heading
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
                  imgSrc={hamandista}
                  alt={"hamandista"}
                />
                <Heading
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
                  imgSrc={bagTwo}
                  alt={"bagTwo"}
                />
                <Heading
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
  );
};

export default BestSellers;
