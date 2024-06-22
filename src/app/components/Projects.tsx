import React from "react";
import { projectDetails, ProjectDetail } from "./Data/projectDetails";
import "@/app/components/styles/Project.css";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <section id="projects" className="project-container">
        <section className="bg-white">
          <div className="project-div">
            <div className="project-head">
              <h2 className="mb-4 bg-white text-4xl font-extrabold tracking-tight font-extrabold text-primary">
                Projects
              </h2>
              <p className="font-light text-primary bg-white font-medium lg:mb-16 sm:text-xl ">
                Dynamic portfolio exemplifying my prowess and adaptability,
                showcasing a range of projects that underscore my ability to
                deliver exceptional results across various domains.
              </p>
            </div>
            <div className="project-grid">
              {projectDetails.map((project) => (
                <div key={project.id}>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
