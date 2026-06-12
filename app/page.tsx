"use client";
import NavBar from "./components/NavBar";
import {
  motion,
  useMotionValue,
  animate,
  useMotionTemplate,
  cubicBezier,
} from "framer-motion";
import { useEffect, useState } from "react";
import OpeningSVG from "./components/OpeningSVG";

const Home = () => {
  return (
    <>
      <OpeningSVG />
      <motion.div
        className="w-screen  bg-white relative h-[150vh]"
        style={{ clipPath: "url(#pathClip)" }}
      >
        <motion.img
          initial={{ rotate: 10, y: 1000, scale: 1.5 }}
          animate={{ rotate: 0, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: cubicBezier(0.25, 1, 0.5, 1) }}
          className="absolute  left-0 w-full h-full object-cover"
          src="/images/portfolioImage.jpg"
          alt=""
        />
        <NavBar />
      </motion.div>
    </>
  );
};

export default Home;
