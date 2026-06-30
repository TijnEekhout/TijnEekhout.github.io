import React, { ReactNode } from "react";
import { motion } from "framer-motion";
interface Props {
  children?: string;
}

export default function TextContainer({
  children = "Put some text here",
}: Props) {
  return (
    <>
      <motion.div
        initial={{ rotateY: 90 }}
        animate={{ rotateY: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className=" bg-gray-800 rounded-xl p-2"
      >
        <motion.h1 initial={{ scale:0, opacity:0}} animate={{scale:1, opacity: 1}} transition={{delay: 2, duration:.25}} className="text-white text-xl align-text-top">
          {children}
        </motion.h1>
      </motion.div>
    </>
  );
}
