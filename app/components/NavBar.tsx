"use client";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";

export default function NavBar() {
  const router = useTransitionRouter();

  const pathname = usePathname();
  const routes = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Projects",
      url: "/projects",
    },
    {
      label: "About",
      url: "/about",
    },
  ];

  return (
    <>
      <nav className=" z-11 p-6">
        <ul className="flex">
          <motion.div className="backdrop-blur-md flex gap-8 p-3 rounded-xl">
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
                    className="relative z-10 inline-block text-white text-xl font-bold"
                    onClick={(e) => {
                      if (pathname === route.url) return;
                      e.preventDefault();
                      router.push(route.url, {
                        onTransitionReady: pageAnimation,
                      });
                    }}
                    >

                    <TextAnimation delay={i}>
                    {route.label}
                </TextAnimation>
                  </Link>
                <motion.span
                  className="absolute left-0 w-full -bottom-1 h-0.5 bg-white font-bold"
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
