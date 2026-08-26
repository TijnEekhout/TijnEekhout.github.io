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
      <div className="w-full min-h-[150vh] bg-white z-10 relative">
        <motion.div
          className="absolute overflow-hidden"
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true, amount: 1 }}
        >
          <motion.h1
            initial={{ y: 300, rotateZ: 10 }}
            animate={{ y: inView ? 0 : 300, rotateZ: inView ? 0 : 10 }}
            transition={{ duration: 1.5, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            className="text-[100px] sm:text-[140px] md:text-[190px] lg:text-[250px] leading-none"
          >
            Work
          </motion.h1>
        </motion.div>
        <Link href="https://studio-maid-6.vercel.app/">
          <motion.div className="absolute left-2/5 -translate-x-1/2 top-[20%]">
            <NatlabProject />
          </motion.div>
        </Link>
        <Link href="https://ambitie-project.vercel.app/">
          
        <div className="absolute left-4/7 top-[65%] -translate-x-1/2">
          <MinionProject />
        </div>
        </Link>
      </div>
    </>
  );
}
