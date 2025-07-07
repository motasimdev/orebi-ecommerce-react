import React from "react";
import { motion, useScroll } from "motion/react";
import Container from "../Container";
import Image from "../Image";
import adThree from '/src/assets/lampProduct.png'

const MotionImage = motion(Image)

const Motion = () => {
  // const scrollYProgress = useScroll().scrollYProgress
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="h-2 bg-amber-400 origin-left w-full fixed top-0 left-0"
        style={{
          scaleX: scrollYProgress,
        }}
      ></motion.div>

      <div className="">
        <Container>
          
          {/* ========================================= */}
          <motion.div
            className="w-[60px] p-15 bg-amber-600"
            initial={{
              opacity: 0,
              x: -10,
              y: 0,
            }}
            transition={{
              duration: 3,
              delay: 1,
              // repeat: infinity/2
              // ease: 'anticipate'
            }}
            animate={{
              opacity: 1,
              x: 0,
              // x: [0,800,800,0,0],
              // y: [0,0,300,300,0],
              // rotate: [360,0,360,-360,0]
              // ==================================
              rotate: 900
            }}
            whileHover={{
              backgroundColor: "blue",
            }}
            // =======================
            whileTap={{
              scale: "0.8",
            }}
            // =========================
            drag
            // whileDrag={{
            //     scale: 0.8
            // }}
            dragConstraints={{
              left: 0,
              top: 0,
              right: 1200,
              bottom: 300,
            }}
            dragDirectionLock="true"
            // ======================
            exit={{}}
          ></motion.div>

          {/* =========================================== */}

          <div className="my-5">
            <MotionImage src={adThree} alt={"adThree"} className={""}
            initial={{
                opacity: 0
            }}
            animate={{
                x: 1000,
                opacity: 1
            }}
            transition={{
                duration: 3
            }}
            whileHover={{
                scale: 0.8
            }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Motion;
