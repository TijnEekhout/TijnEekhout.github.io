import { projects } from "../modules/projects.js";
import { motion } from "framer-motion"

export default function ProjectsComponent() {
  return (
    <>
    <div className="mx-auto grid w-full max-w-7xl grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 px-6">
      {projects.map((project) => (
        <article
          key={project.id}
          className="w-full overflow-hidden rounded-xl"
        >
          <div className="flex aspect-video w-full items-center justify-center">
            <button>
            <img
              src={project.src}
              alt={project.name}
              className="max-h-full max-w-full object-contain"
            />
            </button>
              
          </div>
        </article>
      ))}
      </div>
    </>
  );
}
