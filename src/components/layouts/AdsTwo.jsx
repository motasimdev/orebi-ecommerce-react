import React from "react";
import Container from "../Container";
import Image from "../Image";
import { Link } from "react-router";
import watch from "/src/assets/watchAd.png";

const AdsTwo = () => {
  return (
    <>
      <div className="pt-[100px] pb-[65px] hidden lg:block">
        <Container>
          <Link>
            <Image src={watch} alt={"watch"} />
          </Link>
        </Container>
      </div>

      {/* responsive----------- */}
      <div className="py-2 lg:hidden">
        <Container>
          <Link>
            <Image src={watch} alt={"watch"} className={""}/>
          </Link>
        </Container>
      </div>
      {/* responsive-----------end */}
    </>
  );
};

export default AdsTwo;
