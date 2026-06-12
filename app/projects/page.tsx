"use client";
import { clipPath } from "framer-motion/client";
import NavBar from "../components/NavBar";
import OpeningSVG from "../components/OpeningSVG";
import TextAnimation from "../components/TextAnimation";
import { motion, cubicBezier } from "framer-motion";

const page = () => {
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
              src="/images/portfolioBG.jpg"
              alt=""
            />
          </div>
          <NavBar />
        </div>
      </motion.div>
    </>
  );
};
export default page;
