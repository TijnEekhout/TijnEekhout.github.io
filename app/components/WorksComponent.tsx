"use client";
import { motion } from "framer-motion";
import ProjectsComponent from "./ProjectsComponent";
export default function WorksComponent() {
  return (
    <>
      <div className="w-screen h-screen bg-white z-10 relative">
        <motion.div className="absolute left-1/2 -translate-x-1/2 text-8xl origin-center top-20">
          Projects
        </motion.div>
        <div className="absolute left-1/2 top-1/3 w-4/5 h-1/2 origin-center -translate-x-1/2">
          <div className="relative">
            <div className="absolute">
              
          <ProjectsComponent />
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
