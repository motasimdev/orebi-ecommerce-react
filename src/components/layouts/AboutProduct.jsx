import React from "react";
import Image from "../Image";
import productOne from "/src/assets/aboutOne.png";
import productTwo from "/src/assets/aboutTwo.png";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router";
import { motion } from "motion/react";
import Heading from "../Heading";

const AboutProduct = () => {
  return (
    <>
      <div className="pt-[50px] pb-[65px]">
        <Container>
          <Flex className={"justify-between"}>

            {/* ======================= */}
            <motion.div
              className="w-[49%]"

            //   ========animate===========
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
              <Link to={"/about"}>
                <Image
                  src={productOne}
                  alt={"productOne"}
                  className={"w-full"}
                />
              </Link>
            </motion.div>

            {/* ================== */}
            <motion.div
              className="w-[49%]"

            //   =====animate=======
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
                scale: 0.9,
              }}
            >
              <Link>
                <Image
                  src={productTwo}
                  alt={"productTwo"}
                  className={"w-full"}
                />
              </Link>
            </motion.div>
          </Flex>
        </Container>
      </div>

      {/* ======================================2nd================================================= */}
      <div className="py-[50px]">
        <Container>
          <Heading
            text={
              "Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
            }
            as={"h3"}
            className={"font-normal text-[32px] text-[#262626] leading-[52px]"}
          />
        </Container>
      </div>
    </>
  );
};

export default AboutProduct;
