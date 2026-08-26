"use client";
import NavBar from "./components/NavBar";
import { motion, cubicBezier } from "framer-motion";
import OpeningSVG from "./components/OpeningSVG";
import WorkContainer from "./components/WorkContainer";
import VineSVG from "./components/VineSVG";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer"

const Home = () => {
  return (
    <>
      <OpeningSVG />
      <VineSVG />
      <motion.div className="relative" style={{ clipPath: "url(#pathClip)" }}>
        <motion.div
          className="relative h-[100svh] min-h-[32rem] w-full overflow-hidden bg-white"
          initial={{ rotate: 10, y: 1000, scale: 1.5 }}
          animate={{ rotate: 0, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: cubicBezier(0.25, 1, 0.5, 1) }}
        >
          <NavBar />
          <motion.h1 className="absolute left-[6%] top-[30%] max-w-[90%] -translate-y-1/2 text-[clamp(4rem,16vw,9rem)] leading-[0.85] text-black font-dancing whitespace-nowrap">
            Creative
          </motion.h1>
          <motion.h1 className="absolute right-[5%] top-[70%] max-w-[90%] -translate-y-1/2 text-[clamp(4rem,16vw,9rem)] leading-[0.85] text-black font-dancing whitespace-nowrap">
            Developer
          </motion.h1>
        </motion.div>
      </motion.div>
      <WorkContainer />
      <AboutMe />
      <Footer />
    </>
  );
};

export default Home;
