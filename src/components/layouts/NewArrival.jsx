import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct";
import Container from "../Container";
import Flex from "../Flex";
import watchA from "/src/assets/watchA.png";
import watchB from "/src/assets/watchB.png";
import jhuri from "/src/assets/jhuri.png";
import putul from "/src/assets/putul.png";
import Heading from "../Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrw from "../NextArrw";
import PrevArrw from "../PrevArrw";
import axios from "axios";

const NewArrival = () => {
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

  const [myProduct, setMyproduct] = useState([]);

  useEffect(() => {
    async function all() {
      let data = await axios.get("https://dummyjson.com/products");
      setMyproduct(data.data);
      
    }

    all();
  }, []);

  return (
    <>
      <div className="pb-6">
        <Container>
          <Heading
            text={"New Arrival"}
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
                  imgSrc={watchA}
                  alt={"watchA"}
                />
              </div>
              <div className="px-2">
                <SingleProduct
                  BadgeText={"10%"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  imgSrc={watchB}
                  alt={"watchB"}
                />
              </div>
              <div className="px-2">
                <SingleProduct
                  BadgeText={"10%"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  imgSrc={jhuri}
                  alt={"jhuri"}
                />
              </div>
              <div className="px-2">
                <SingleProduct
                  BadgeText={"10%"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  imgSrc={putul}
                  alt={"putul"}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
