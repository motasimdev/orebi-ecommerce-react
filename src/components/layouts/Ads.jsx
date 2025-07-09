import React from "react";
import Image from "../Image";
import Container from "../Container";
import Flex from "../Flex";
import adONe from "/src/assets/lightProduct.png";
import adTwo from "/src/assets/watchProduct.png";
import adThree from "/src/assets/lampProduct.png";
import { Link } from "react-router";
import { motion } from "motion/react";

const MotionLink = motion(Link);

const Ads = () => {
  return (
    <>
      <div className="pt-[170px] pb-[65px]">
        <Container>
          <Flex className={"justify-between"}>
            <motion.div
              className="w-[49%]"

            //   ==================
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Link to={"/productInside"}>
                <Image src={adONe} alt={"adOn e"} className={"w-full"} />
              </Link>
            </motion.div>
            <div className="w-[49%]">
              <motion.div className=""

            //   =====================
              initial={{
                x: 50,
                opacity: 0
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: false,
                amount: 0.2
              }}
              transition={{
                duration: 1
              }}
              whileTap={{
                scale: 0.9
              }}
              >
                <Link to={"/productInside"}>
                  <Image src={adTwo} alt={"adTwo"} className={"w-full pb-8"} />
                </Link>
              </motion.div>
              <motion.div className=""
              initial={{
                x: 50,
                opacity: 0
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 1
              }}
              whileTap={{
                scale: 0.9
              }}
              viewport={{
                once: false,
                amount: 0.2
              }}
              >
                <Link to={"/productInside"}>
                  <Image src={adThree} alt={"adThree"} className={"w-full"} />
                </Link>
              </motion.div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Ads;
