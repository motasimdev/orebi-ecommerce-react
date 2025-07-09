import React from "react";
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

const NewArrival = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      

      <div className="pb-6">
        <Container>
          <Heading
            text={"New Arrival"}
            as={"h3"}
            className={"font-bold text-[39px] pb-15 pt-12"}
          />
          <Slider {...settings}>
        <div>
          <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              imgSrc={watchA}
              alt={"watchA"}
            />
        </div> 
        <div>
           <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              imgSrc={watchB}
              alt={"watchB"}
            />
        </div> 
        <div>
          <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              imgSrc={jhuri}
              alt={"jhuri"}
            />
        </div> 
        <div>
          <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              imgSrc={putul}
              alt={"putul"}
            />
        </div> 
      </Slider>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
