import React from "react";
import Catagories from "../Catagories";
import Container from "../Container";
import ColorCatagry from "../ColorCatagry";
import BrandCatagry from "../BrandCatagry";

const ShopContent = () => {
  return (
    <>
      <div className="">
        <Container>
          <div className="flex items-center">
            <div className="">
              <Catagories />
              <ColorCatagry/>
              <BrandCatagry/>
            </div>
            <div className=""></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopContent;
