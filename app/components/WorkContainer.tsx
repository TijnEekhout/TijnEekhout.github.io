"use client";
import { cubicBezier, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import NatlabProject from "./projects/NatlabProject";
import MinionProject from "./projects/MinionProject";
export default function WorksComponent() {
  const [inView, setInView] = useState(false);

  return (
    <>
      <div className="relative z-10 -mt-px min-h-[max(150vh,70rem)] w-full overflow-hidden bg-white">
        <motion.div
          className="absolute overflow-hidden"
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true, amount: 1 }}
        >
          <motion.h1
            initial={{ y: 300, rotateZ: 10 }}
            animate={{ y: inView ? 0 : 300, rotateZ: inView ? 0 : 10 }}
            transition={{ duration: 1.5, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            className="text-[clamp(6rem,18vw,15.625rem)] leading-none"
          >
            Work
          </motion.h1>
        </motion.div>
        <Link href="https://studio-maid-6.vercel.app/">
          <motion.div className="absolute left-[8%] top-[20%] sm:left-2/5 sm:-translate-x-1/2">
            <NatlabProject />
          </motion.div>
        </Link>
        <Link href="https://ambitie-project.vercel.app/">
          
        <div className="absolute right-[8%] top-[65%] sm:left-4/7 sm:right-auto sm:-translate-x-1/2">
          <MinionProject />
        </div>
        </Link>
      </div>
    </>
  );
}
