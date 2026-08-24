"use client";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import { useAnimDone } from "../providers/ContextProvider";

export default function NavBar() {
  const router = useTransitionRouter();

  const { done } = useAnimDone();

  const pathname = usePathname();
  const routes = [
    {
      label: "Works",
      url: "/projects",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
      {done && (
        <nav className=" z-11 p-6">
          <ul className="flex justify-end">
            <div className="absolute left-8 p-3">
              <motion.h1
                initial={{ opacity: 0, y: -20, scale:0.75 }}
                animate={{ opacity: 1, y: 0, scale:1 }}
                transition={{duration: 1.5}}
                className="text-black text-xl font-extralight">
                Tijn Eekhout
              </motion.h1>
            </div>
            <motion.div className="flex gap-8 p-3 rounded-xl">
              {routes.map((route, i) => (
                <li key={route.label}>
                  <motion.div
                    className="relative inline-block"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <Link
                      href={route.url}
                      className="relative z-10 text-black text-xl"
                      onClick={(e) => {
                        if (pathname === route.url) return;
                        e.preventDefault();
                        router.push(route.url, {
                          onTransitionReady: pageAnimation,
                        });
                      }}
                    >
                      <TextAnimation delay={i + 1}>{route.label}</TextAnimation>
                    </Link>
                    <motion.span
                      className="absolute right-0 w-full -bottom-1 h-0.5 bg-black font-bold"
                      variants={{
                        rest: { scaleX: 0, transformOrigin: "right" },
                        hover: { scaleX: 1, transformOrigin: "left" },
                      }}
                      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    />
                  </motion.div>
                </li>
              ))}
            </motion.div>
          </ul>
        </nav>
      )}
    </>
  );
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.95,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};
