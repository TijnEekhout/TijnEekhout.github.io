import React from "react";
import { motion, cubicBezier } from "framer-motion";
interface Props {
  children?: string;
  delay?: number;
  stagger?: number;
}

export default function TextAnimation({
  children = "Put some text here",
  delay = 0.01,
}: Props) {
  return (
    <motion.div className="overflow-hidden">
      {children.split("").map((char, i) => {
        if (char === " ") {
          return " ";
        }
        return (
          <motion.span
            key={`char-${i}`}
            className="inline-block"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: i * delay * 0.05,
              ease: cubicBezier(0.65, 0, 0.35, 1),
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
