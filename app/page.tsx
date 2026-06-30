"use client";
import NavBar from "./components/NavBar";
import { motion, cubicBezier } from "framer-motion";
import OpeningSVG from "./components/OpeningSVG";

const Home = () => {
  return (
    <>
      <OpeningSVG />
      <motion.div
        className="relative"
        style={{ clipPath: "url(#pathClip)" }}
      >
        <div className="w-screen h-screen">
          <div className="absolute bottom-225 w-full h-full left-0">  
            <motion.img
              initial={{ rotate: 10, y: 1000, scale: 1.5 }}
              animate={{ rotate: 0, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: cubicBezier(0.25, 1, 0.5, 1) }}
              src="/images/portfolioImage.jpg"
              alt=""
              className="absolute top-80"
            />
          </div>
          <NavBar />
        </div>
        <motion.div>
          <motion.h1
            className="text-white text-8xl absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
            // initial={{ }}
            // animate={{  }}
            // transition={{  }}
          >
            Tijn Eekhout
          </motion.h1>
          <h2 className="text-white text-6xl absolute top-[60vh] left-1/4 -translate-x-1/2 -translate-y-1/2">
            Front end developer
          </h2>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
