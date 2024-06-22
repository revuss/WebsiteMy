import React from "react";
import "@/app/components/styles/Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skill-section-head">
        <section>
          <div className="skill-section">
            <h2 className=" skill-title">My Technical Skills</h2>
            <p className="skill-text text-xl">
              As a full-stack developer, I excel in backend and frontend
              development, seamless integration, Git version control, cloud
              deployment, and database schema design, ensuring optimized
              performance and functionality for web applications.
            </p>
            <div className="space-y-8 my-20 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <h3 className="mb-2 skills text-xl font-semibold ">
                  Express JS{" "}
                </h3>
                <p className="skill-content ">
                  utilize Express to streamline web development tasks,
                  facilitating the creation and management of web applications
                  effortlessly.
                </p>
              </div>
              <div>
                <h3 className="mb-2 skills text-xl font-semibold ">
                  React JS{" "}
                </h3>
                <p className="skill-content">
                  Leveraging React JS, I craft user interfaces that are
                  intuitive and engaging, ensuring an optimal experience for
                  visitors to my websites and applications.
                </p>
              </div>
              <div>
                <h3 className="mb-2 skills text-xl font-semibold ">
                  Spring Boot
                </h3>
                <p className="skill-content">
                  With Spring Boot, I expedite Java application development,
                  enabling rapid creation of robust and scalable software
                  solutions tailored to specific project requirements.
                </p>
              </div>
              <div>
                <h3 className="mb-2 skills text-xl font-semibold ">MongoDB</h3>
                <p className="skill-content">
                  MongoDB serves as the cornerstone of my data management
                  strategy, offering flexibility and scalability to efficiently
                  handle diverse data types and volumes.
                </p>
              </div>
              <div>
                <h3 className="mb-2 skills text-xl font-semibold ">MySQL</h3>
                <p className="skill-content">
                  MySQL plays a pivotal role in organizing and accessing data
                  across my projects, ensuring seamless data management and
                  retrieval for optimal performance.
                </p>
              </div>
              <div>
                <h3 className="mb-2 skills text-xl font-semibold ">Node JS</h3>
                <p className="skill-content">
                  By harnessing the power of Node.js, I drive backend
                  operations, building robust server-side applications and APIs
                  that power my digital initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
