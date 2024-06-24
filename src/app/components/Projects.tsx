import React from "react";
import { projectDetails, ProjectDetail } from "./Data/projectDetails";
import "@/app/components/styles/Project.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { pAnimation, h2Animation, divAnimation } from "../Utility/animations";

const Projects = () => {
  return (
    <>
      <section id="projects" className="project-container bg-white">
        <section className="bg-white">
          <div className="project-div">
            <div className="project-head">
              <motion.h2
                className="mb-4 bg-white text-4xl font-extrabold tracking-tight font-extrabold text-primary"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px", amount: 0.5 }}
                variants={h2Animation}
              >
                Projects
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px", amount: 0.5 }}
                variants={h2Animation}
                className="bg-white font-light text-primary font-medium lg:mb-16 sm:text-xl"
              >
                <p className="text-primary bg-white ">
                  Dynamic portfolio exemplifying my prowess and adaptability,
                  showcasing a range of projects that underscore my ability to
                  deliver exceptional results across various domains.
                </p>
              </motion.div>
            </div>
            <div className="project-grid">
              {projectDetails.map((project) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ margin: "-30px", amount: 0.5 }}
                  variants={pAnimation}
                >
                  <div className="btn items-center bg-pdark hover:bg-second  sm:flex text-white hover:text-pdark">
                    <div className="p-5">
                      <h3 className="text-xl font-bold tracking-tight ">
                        <Link href={project.link} target="_blank">
                          {project.name}
                        </Link>
                      </h3>
                      <p className="mt-3 mb-4  ">{project.description}</p>
                      <p className="mt-3 mb-4  ">
                        Technologies Used: {project.tech.join(", ")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
