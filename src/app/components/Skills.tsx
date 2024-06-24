import React from "react";
import "@/app/components/styles/Skills.css";
import { motion } from "framer-motion";
import { h2Animation, pAnimation } from "../Utility/animations";
import { skillDetails } from "./Data/SkillData";

const Skills = () => {
  return (
    <>
      <div className="skill-section-head">
        <section>
          <div className="skill-section">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-10px", amount: 0.5 }}
              variants={h2Animation}
            >
              <h2 className=" skill-title">My Technical Skills</h2>
              <p className="skill-text text-xl">
                As a full-stack developer, I excel in backend and frontend
                development, seamless integration, Git version control, cloud
                deployment, and database schema design, ensuring optimized
                performance and functionality for web applications.
              </p>
            </motion.div>
            <div className="space-y-8 my-20 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              {skillDetails.map((skill, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ margin: "-50px", amount: 0.5 }}
                  variants={pAnimation}
                >
                  <h3 className="mb-2 skills text-xl font-semibold ">
                    {skill.name}
                  </h3>
                  <p className="skill-content ">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
