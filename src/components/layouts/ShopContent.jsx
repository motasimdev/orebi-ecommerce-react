import React from "react";
import Catagories from "../Catagories";
import Container from "../Container";

const ShopContent = () => {
  return (
    <>
      <div className="">
        <Container>
          <div className="flex items-center">
            <div className="">
              <Catagories />
            </div>
            <div className=""></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopContent;
