import { motion, cubicBezier } from "framer-motion";

export default function MinionProject() {
  return (
    <>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: cubicBezier(0.33, 1, 0.68, 1) }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="relative w-[min(78vw,18.75rem)] overflow-hidden"
      >
        <motion.div initial="rest" animate="rest" whileHover="hover">
          <motion.h1
            variants={{
              rest: { y: 37, rotateZ: 20 },
              hover: { y: 0, rotateZ: 0 },
            }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-0 left-3 font-mono text-white"
          >
            Visit Project
          </motion.h1>
          <img className="block h-auto w-full" src="/images/MinionProject.png" alt="" width="750" height="1500" />
        </motion.div>
      </motion.div>
    </>
  );
}
