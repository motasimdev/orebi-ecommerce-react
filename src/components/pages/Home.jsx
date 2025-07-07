import React from 'react'
import Banner from '../layouts/Banner'
import Information from '../layouts/Information'
import Ads from '../layouts/Ads'
import { motion, useScroll } from "motion/react";


const Home = () => {

  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div 
      className="h-2 bg-amber-400 w-full origin-left fixed top-0 left-0"
      style={{
        scaleX: scrollYProgress
      }}
      >

      </motion.div>
    <Banner/>
    <Information/>
    <Ads/>
    </>
  )
}

export default Home