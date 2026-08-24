"use client";

import {
  motion,
  useMotionValue,
  animate,
  useMotionTemplate,
  cubicBezier,
} from "framer-motion";
import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { useAnimDone } from "../providers/ContextProvider";

export default function OpeningSVG() {
  const yAxisLeft = useMotionValue(0);
  const yAxisRight = useMotionValue(0);

  const width = useMotionValue(0);
  const height = useMotionValue(0);

  const pathD = useMotionTemplate`
    M 0 ${yAxisLeft}
    L ${width} ${yAxisRight}
    L ${width} ${height}
    L 0 ${height}
    L 0 ${yAxisLeft}
  `;

  const lenis = useLenis();
  const { done, setDone } = useAnimDone();

  useEffect(() => {
    width.set(window.innerWidth);
    height.set(window.innerHeight);

    yAxisLeft.set(window.innerHeight);
    yAxisRight.set(window.innerHeight);

    setDone(false);

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
  }, [yAxisLeft, yAxisRight, width, height, setDone]);

  useEffect(() => {
    window.scrollTo(0, 0);

    lenis?.stop();

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    if (done) {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      lenis?.start();
    }

    const timer = setTimeout(() => {
      setDone(true);
    }, 1050);

    return () => clearTimeout(timer);
  }, [done, lenis, setDone]);

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
