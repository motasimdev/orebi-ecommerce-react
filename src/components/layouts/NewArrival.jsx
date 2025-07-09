import React from "react";
import SingleProduct from "../SingleProduct";
import Container from "../Container";
import Flex from "../Flex";
import watchA from "/src/assets/watchA.png";
import watchB from "/src/assets/watchB.png";
import jhuri from "/src/assets/jhuri.png";
import putul from "/src/assets/putul.png";
import Heading from "../Heading";

const NewArrival = () => {
  return (
    <>
      <div className="pb-6">
        <Container>
            <Heading text={"New Arrival"} as={"h3"} className={"font-bold text-[39px] pb-15 pt-12"}/>
          <Flex className={"gap-x-5"}>
            <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              src={watchA}
              alt={"watchA"}
            />
            <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              src={watchB}
              alt={"watchB"}
            />
            <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              src={jhuri}
              alt={"jhuri"}
            />
            <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              src={putul}
              alt={"putul"}
            />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
