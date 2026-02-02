
import Banner from "../layouts/Banner";
import Information from "../layouts/Information";
import Ads from "../layouts/Ads";
import { motion, useScroll } from "motion/react";
import NewArrival from "../layouts/NewArrival";
import BestSellers from "../layouts/BestSellers";
import AdsTwo from "../layouts/AdsTwo";
import SpecialOffers from "../layouts/SpecialOffers";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="h-2 bg-[#717171] w-full origin-left fixed top-0 left-0 z-[100]"
        style={{
          scaleX: scrollYProgress,
        }}
        initial={{
          scaleX:0,
        }}
      ></motion.div>
      <Banner />
      <Information />
      <Ads />
      <NewArrival />
      <BestSellers />
      <AdsTwo />
      <SpecialOffers />
    </>
  );
};

export default Home;
