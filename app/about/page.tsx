"use client";
import NavBar from "../components/NavBar";
import OpeningSVG from "../components/OpeningSVG";
import { motion, cubicBezier } from "framer-motion";
import TextContainer from "../components/TextContainer";

const page = () => {
  return (
    <>
      <OpeningSVG />
      <motion.div
        className="relative overflow-hidden"
        style={{ clipPath: "url(#pathClip)" }}
      >
        <div className="w-screen h-screen bg-white">
          <motion.div initial={{ scale:0, opacity:0}} animate={{scale:1, opacity: 1}} transition={{delay: 2, duration:.25}} className="border-gray-800 bg-gray-800 border-4 rounded-2xl z-14 absolute  right-[20vw] top-[10vw]">
            <motion.img
              className="rounded-xl"
              src="./images/SelfieSuit.png"
              alt=""
              width="300"
              height="300"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.3, ease: cubicBezier(0.25, 1, 0.5, 1) }}
            />
          </motion.div>
          <div className="absolute z-13 bottom-[30vh] right-[25%] w-[35%]">
            <TextContainer>
              Hi, I&apos;m Tijn Eekhout, a motivated and disciplined web developer
              with a passion for creating high-quality digital experiences. I
              enjoy taking on challenges and continuously improving my skills. I
              believe in going above and beyond expectations, striving to
              deliver work that exceeds standards in both quality and quantity.
              My goal is not only to meet requirements but to consistently
              provide results that make a lasting impact.
            </TextContainer>
          </div>
          <div className="absolute w-full h-full left-0">
          </div>
          <NavBar />
        </div>
      </motion.div>
    </>
  );
};
export default page;
