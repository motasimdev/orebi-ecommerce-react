import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import { motion } from "motion/react";

const Vision = () => {
  return (
    <>
      <div className="pt-[50px] pb-[130px]">
        <Container>
          <div className={"flex justify-between"}>
            <motion.div
              className="w-[33%]"
              //   +++++++animate++++++++
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
              <Heading
                text={"Our Vision"}
                as={"h3"}
                className={"font-bold text-[25px] text-[#262626]"}
              />
              <Heading
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
                }
                as={"p"}
                className={"font-normal text-base text-[#767676] leading-7"}
              />
            </motion.div>

            {/* ================================================ */}
            <motion.div
              className="w-[33%]"

              // =======animate========
              initial={{
                y: -70,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Heading
                text={"Our Vision"}
                as={"h3"}
                className={"font-bold text-[25px] text-[#262626]"}
              />
              <Heading
                text={
                  "Our Story Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
                }
                as={"p"}
                className={"font-normal text-base text-[#767676] leading-7"}
              />
            </motion.div>

            {/* ================================================= */}
            <motion.div
              className="w-[33%]"
              //   =====animate======
              initial={{
                x: 50,
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
              <Heading
                text={"Our Vision"}
                as={"h3"}
                className={"font-bold text-[25px] text-[#262626]"}
              />
              <Heading
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
                }
                as={"p"}
                className={"font-normal text-base text-[#767676] leading-7"}
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Vision;
