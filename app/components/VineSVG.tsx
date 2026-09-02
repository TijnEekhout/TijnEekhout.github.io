"use client";

import { motion, cubicBezier } from "framer-motion";

export default function VineSVG() {
  return (
    <>
      <div>
        <svg
          viewBox="0 0 1440 1900"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
          fill="none"
        >
          <motion.path
            d="
              M 0 1600

              C 100 1510, 190 1570, 270 1480
              C 350 1390, 280 1320, 410 1270

              C 500 1230, 620 1320, 700 1220
              C 790 1110, 700 1030, 850 990

              C 970 950, 1060 1000, 1130 850
              C 1200 700, 1130 600, 1260 560

              C 1340 530, 1370 450, 1440 400
            "
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          />
          <motion.g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
              d="M 285 1460 C 325 1430, 355 1395, 365 1360"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
              d="M 90 1550 C 125 1485, 95 1460, 55 1440"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 2.5, duration: 2, ease: "easeInOut" }}
              d="M 345 1310 C 325 1270, 285 1240, 235 1235"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
              d="M 485 1260 C 500 1205, 535 1170, 580 1140"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 3.2, duration: 2, ease: "easeInOut" }}
              d="M 672 1245 C 625 1200, 590 1165, 550 1150"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 3.4, duration: 2, ease: "easeInOut" }}
              d="M 745 1135 C 800 1120, 835 1090, 860 1050"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 3.6, duration: 2, ease: "easeInOut" }}
              d="M 860 988 C 825 940, 800 900, 800 855"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 3.7, duration: 2, ease: "easeInOut" }}
              d="M 1000 963 C 1040 920, 1065 890, 1075 845"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 3.8, duration: 2, ease: "easeInOut" }}
              d="M 1135 835 C 1090 800, 1060 765, 1045 720"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 3.9, duration: 2, ease: "easeInOut" }}
              d="M 1170 700 C 1210 665, 1235 625, 1240 585"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 4, duration: 2, ease: "easeInOut" }}
              d="M 1265 558 C 1235 520, 1210 480, 1210 440"
            />
            <motion.path
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ pathLength: 1, strokeWidth: 2 }}
              transition={{ delay: 4.1, duration: 2, ease: "easeInOut" }}
              d="M 1340 503 C 1370 460, 1390 430, 1395 415"
            />
          </motion.g>

          <motion.g
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          >
            <motion.path
              d="
                M 55 1440
                C 25 1405, 25 1370, 40 1340
                C 75 1355, 90 1395, 55 1440
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 3.1, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0.5, originY: 1}}
            />

            <motion.path
              d="
                M 365 1360
                C 350 1315, 365 1280, 395 1260
                C 420 1295, 410 1335, 365 1360
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 3.4, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0.1, originY: 1}}
            />

            <motion.path
              d="
                M 235 1235
                C 195 1205, 185 1170, 195 1135
                C 235 1145, 260 1185, 235 1235
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 4.1, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0.8, originY: 1}}
            />

            <motion.path
              d="
                M 580 1140
                C 575 1095, 595 1060, 630 1045
                C 645 1085, 625 1125, 580 1140
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 4.7, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0, originY: 1}}
            />

            <motion.path
              d="
                M 550 1150
                C 510 1125, 495 1090, 505 1055
                C 545 1065, 570 1100, 550 1150
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 4.9, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0.85, originY: 1}}
            />

            <motion.path
              d="
                M 860 1050
                C 865 1005, 890 975, 930 965
                C 935 1005, 905 1040, 860 1050
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 5, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0, originY: 1}}
            />

            <motion.path
              d="
                M 800 855
                C 770 820, 770 780, 790 750
                C 825 770, 835 810, 800 855
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 5, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0.5, originY: 1}}
            />

            <motion.path
              d="
                M 1075 845
                C 1080 800, 1105 770, 1140 760
                C 1145 800, 1120 835, 1075 845
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 5.1, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0, originY: 1}}
            />

            <motion.path
              d="
                M 1045 720
                C 1010 690, 1000 650, 1015 620
                C 1055 635, 1070 675, 1045 720
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 5.2, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0.75, originY: 1}}
            />

            <motion.path
              d="
                M 1240 585
                C 1240 540, 1260 505, 1295 490
                C 1310 530, 1285 570, 1240 585
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 5.3, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0, originY: 1}}
            />

            <motion.path
              d="
                M 1210 440
                C 1180 405, 1180 365, 1200 335
                C 1235 355, 1245 400, 1210 440
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 5.4, duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0.5, originY: 1}}
            />

            <motion.path
              d="
                M 1395 415
                C 1400 375, 1415 345, 1440 325
                C 1450 365, 1435 400, 1395 415
                Z
              "
              initial={{ scale: 0 }}
              animate={{ scale : 1}}
              transition={{ delay: 5.55 , duration: 1, ease: 	cubicBezier(0.37, 0, 0.63, 1) }}
              style={{ originX: 0, originY: 1}}
            />
          </motion.g>
        </svg>
      </div>
    </>
  );
}
