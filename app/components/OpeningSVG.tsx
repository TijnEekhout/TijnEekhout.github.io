"use client";
import NavBar from "./NavBar";
import {
  motion,
  useMotionValue,
  animate,
  useMotionTemplate,
  cubicBezier,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function OpeningSVG() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const yAxisLeft = useMotionValue(0);
  const yAxisRight = useMotionValue(0);

  const pathD = useMotionTemplate`M 0 ${yAxisLeft} L ${dimensions.width} ${yAxisRight} L ${dimensions.width} ${dimensions.height} L 0 ${dimensions.height} L 0 ${yAxisLeft}`;

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    yAxisLeft.set(window.innerHeight);
    yAxisRight.set(window.innerHeight);

    animate(yAxisLeft, 0, {
      duration: 1,
      delay: 0.1,
      ease: cubicBezier(0.25, 1, 0.5, 1),
    });
    animate(yAxisRight, 0, {
      duration: 1,
      delay: 0.15,
      ease: cubicBezier(0.25, 1, 0.5, 1),
    });
  }, [yAxisLeft, yAxisRight]);

  const [done, setDone] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setDone(true);
    }, 1050);
  }, []);

  return (
    <>
      {!done && (
        <motion.svg className="w-screen h-screen absolute left-0 top-0 pointer-events-none bg-[#091E26]">
          <defs>
            <clipPath id="pathClip">
              <motion.path d={pathD} />
            </clipPath>
          </defs>
        </motion.svg>
      )}
    </>
  );
}
