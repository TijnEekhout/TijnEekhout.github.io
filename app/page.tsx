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
          className="w-screen h-screen bg-white"
          initial={{ rotate: 10, y: 1000, scale: 1.5 }}
          animate={{ rotate: 0, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: cubicBezier(0.25, 1, 0.5, 1) }}
        >
          <NavBar />
          <motion.h1 className="text-black text-9xl absolute top-1/4 left-1/6 -translate-x-1/2 -translate-y-1/2 font-dancing">
            Creative
          </motion.h1>
          <motion.h1 className="text-black text-9xl absolute top-3/4 left-8/10 -translate-x-1/2 -translate-y-1/2 font-dancing">
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
