"use client";
import { motion, cubicBezier } from "framer-motion";

export default function AboutMe() {
  return (
    <>
      <div className="w-full min-h-[50vh] bg-white z-10 relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.25 }}
          className="border-gray-800 bg-gray-800 border-4 rounded-2xl z-14 absolute  right-[20%] top-[10%]"
        >
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
        <div className="absolute z-13 left-[45%] top-[25%] -translate-x-1/2 max-w-[30%] bg-gray-700 rounded-xl p-1 text-white">
          Hi, I&apos;m Tijn Eekhout, a motivated and disciplined web developer
          <br></br>
          with a passion for creating high-quality digital experiences.<br></br>
          I enjoy taking on challenges and continuously improving my skills.
          <br></br> I believe in going above and beyond expectations, striving
          to<br></br>
          deliver work that exceeds standards in both quality and quantity.
          <br></br>
          My goal is not only to meet requirements but to consistently<br></br>
          provide results that make a lasting impact.<br></br>
        </div>
      </div>
    </>
  );
}
