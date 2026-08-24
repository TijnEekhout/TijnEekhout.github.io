"use client";
import NavBar from "../components/NavBar";
import OpeningSVG from "../components/OpeningSVG";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <OpeningSVG />
      <motion.div
        className="relative"
        style={{ clipPath: "url(#pathClip)" }}
      >
        <div className="w-screen h-screen bg-white">
          <div className="absolute bottom-225 w-full h-full left-0">
          </div>
          <NavBar />
        </div>
      </motion.div>
    </>
  );
};
export default page;
