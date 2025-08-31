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
      <div className="pt-[170px] pb-[65px] hidden lg:block">
        <Container className={"overflow-hidden"}>
          <Flex className={"justify-between"}>
            <motion.div
              className="w-[49%]"
              //   ==================
              initial={{
                x: -20,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.1,
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
              <motion.div
                className=""
                //   =====================
                initial={{
                  x: 20,
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
                  <Image src={adTwo} alt={"adTwo"} className={"w-full pb-8"} />
                </Link>
              </motion.div>

              
              <motion.div
                className=""
                // ===========
                initial={{
                  x: 20,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
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

      {/* responsive sm------ */}
      <div className="pt-[8px] pb-[8px] md:hidden">
        <Container>
          <Flex className={"justify-between"}>
            <motion.div
              className="w-[49%]"
              //   ==================
              initial={{
                x: 20,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Link to={"/"}>
                <Image src={adONe} alt={"adOn e"} className={"w-full"} />
              </Link>
            </motion.div>

            <div className="w-[49%]">
              <motion.div
                className=""
                //   =====================
                initial={{
                  x: -20,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <Link to={"/"}>
                  <Image
                    src={adTwo}
                    alt={"adTwo"}
                    className={"w-full pb-[10px]"}
                  />
                </Link>
              </motion.div>

              <motion.div
                className=""
                // ===============
                initial={{
                  x: -20,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                <Link to={"/"}>
                  <Image src={adThree} alt={"adThree"} className={"w-full"} />
                </Link>
              </motion.div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* responsive sm------end */}

      {/* responsive md------ */}
      <div className="pt-[8px] pb-[8px] hidden md:block lg:hidden">
        <Container>
          <Flex className={"justify-between"}>
            <motion.div
              className="w-[49%]"
              //   ==================
              initial={{
                x: 0,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Link to={"/"}>
                <Image src={adONe} alt={"adOn e"} className={"w-full"} />
              </Link>
            </motion.div>


            <div className="w-[49%]">
              <motion.div
                className=""
                //   =====================
                initial={{
                  x: 0,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <Link to={"/"}>
                  <Image
                    src={adTwo}
                    alt={"adTwo"}
                    className={"w-full pb-5.5"}
                  />
                </Link>
              </motion.div>


              <motion.div
                className=""
                // ================
                initial={{
                  x: 0,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                <Link to={"/"}>
                  <Image src={adThree} alt={"adThree"} className={"w-full"} />
                </Link>
              </motion.div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* responsive------end */}
    </>
  );
};

export default Ads;
