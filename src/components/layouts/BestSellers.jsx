import React from 'react'
import SingleProduct from "../SingleProduct";
import Container from "../Container";
import Flex from "../Flex";
import bag from "/src/assets/bag.png";
import bagTwo from "/src/assets/bagTwo.png";
import jar from "/src/assets/jar.png";
import hamandista from "/src/assets/hamandista.png";
import Heading from "../Heading";

const BestSellers = () => {
  return (
    <>
      <div className="pb-6">
        <Container>
            <Heading text={"Bestsellers"} as={"h3"} className={"font-bold text-[39px] pb-15 pt-12"}/>
          <Flex className={"gap-x-5"}>
            <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              imgSrc={jar}
              alt={"jar"}
            />
            <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              imgSrc={bag}
              alt={"bag"}
            />
            <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              imgSrc={hamandista}
              alt={"hamandista"}
            />
            <SingleProduct
              BadgeText={"10%"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              imgSrc={bagTwo}
              alt={"bagTwo"}
            />
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default BestSellers