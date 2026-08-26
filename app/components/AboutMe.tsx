"use client";
import { motion, cubicBezier } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="w-full min-h-[50vh] bg-white z-10 relative overflow-hidden">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.25 }}
        className="border-gray-800 bg-gray-800 border-4 rounded-2xl z-14 absolute right-[5%] sm:right-[10%] md:right-[20%] top-[8%] w-[40vw] max-w-[300px] min-w-[140px]"
      >
        <motion.img
          className="rounded-xl w-full h-auto"
          src="./images/SelfieSuit.png"
          alt="Tijn Eekhout"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.3, ease: cubicBezier(0.25, 1, 0.5, 1) }}
        />
      </motion.div>

      <div className="absolute z-13 left-2/5 top-[22%] -translate-x-1/2 w-[85%] sm:w-[70%] md:max-w-[30%] bg-gray-700 rounded-xl p-3 sm:p-4 text-white text-sm sm:text-base leading-relaxed">
        Hi, I&apos;m Tijn Eekhout, a motivated and disciplined web developer
        with a passion for creating high-quality digital experiences. I enjoy
        taking on challenges and continuously improving my skills. I believe
        in going above and beyond expectations, striving to deliver work that
        exceeds standards in both quality and quantity. My goal is not only
        to meet requirements but to consistently provide results that make a
        lasting impact.
      </div>
    </div>
  );
}