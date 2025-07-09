import React from 'react'
import Banner from '../layouts/Banner'
import Information from '../layouts/Information'
import Ads from '../layouts/Ads'
import { motion, useScroll } from "motion/react";
import NewArrival from '../layouts/NewArrival';
import BestSellers from '../layouts/BestSellers';


const Home = () => {

  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div 
      className="h-2 bg-[#717171] w-full origin-left fixed top-0 left-0 z-[100]"
      style={{
        scaleX: scrollYProgress
      }}
      >

      </motion.div>
    <Banner/>
    <Information/>
    <Ads/>
    <NewArrival/>
    <BestSellers/>
    </>
  )
}

export default Home