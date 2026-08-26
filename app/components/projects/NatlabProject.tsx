import { motion } from "framer-motion";
import { cubicBezier } from "motion";

export default function NatlabProject() {
  return (
    <>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: cubicBezier(0.33, 1, 0.68, 1) }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: 1.05 }}

        className="w-80 h-142 bg-green-600 relative overflow-hidden"
      >
        <motion.div initial="rest" animate="rest" whileHover="hover">
          <motion.h1
            variants={{ rest: { y: 37, rotateZ: 20 }, hover: { y: 0, rotateZ: 0 } }}
            transition={{ duration: 0.25}}
            className="absolute bottom-0 left-3 font-mono"
          >
            Visit Project
          </motion.h1>
          <img src="/images/NatlabImage.jpg" alt=""></img>
        </motion.div>
      </motion.div>
    </>
  );
}
