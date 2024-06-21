import React from "react";
import { projectDetails, ProjectDetail } from "./Data/projectDetails";

const Projects = () => {
  return (
    <>
      <section id="projects" className="h-auto Skills-page text-white bg-white">
        <section className="bg-white">
          <div className="py-8 bg-white px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto bg-white max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 bg-white text-4xl font-extrabold   tracking-tight font-extrabold text-primary">
                Projects
              </h2>
              <p className="font-light text-primary bg-white font-medium lg:mb-16 sm:text-xl ">
                Dynamic portfolio exemplifying my prowess and adaptability,
                showcasing a range of projects that underscore my ability to
                deliver exceptional results across various domains.
              </p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 bg-white">
              {projectDetails.map((project) => (
                <div key={project.id}>
                  <div className="btn items-center bg-pdark hover:bg-second  sm:flex text-white hover:text-pdark">
                    <div className="p-5">
                      <h3 className="text-xl font-bold tracking-tight ">
                        <a href={project.link} target="_blank">
                          {project.name}
                        </a>
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
