"use client";
import { motion, cubicBezier } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="relative z-10 -mt-px min-h-[38rem] w-full overflow-hidden bg-white sm:min-h-[50vh]">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.25 }}
        className="absolute right-[5%] top-[7%] z-14 w-[min(42vw,18.75rem)] min-w-[8.75rem] rounded-2xl border-4 border-gray-800 bg-gray-800 sm:right-[10%] sm:top-[8%] md:right-[20%]"
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

      <div className="absolute left-[5%] top-[36%] z-13 w-[90%] rounded-xl bg-gray-700 p-3 text-sm leading-relaxed text-white sm:left-2/5 sm:top-[22%] sm:w-[70%] sm:-translate-x-1/2 sm:p-4 sm:text-base md:max-w-[30%]">
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