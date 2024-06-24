import { pAnimation } from "@/app/Utility/animations";
import { motion } from "framer-motion";
import React from "react";

const Thirdpage = () => {
  return (
    <>
      <div className="snap-always snap-start bg-white">
        <div className="h-5/6 w-full flex justify-center items-center bg-white">
          <div className="relative bg-white">
            <div className="relative z-10 bg-white">
              <div className="max-w-[85rem] mx-auto bg-white px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="max-w-3xl text-start bg-white mx-auto">
                  <div className="mt-1 max-w-2xl bg-white">
                    <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ margin: "-20px", amount: 0.5 }}
                      variants={pAnimation}
                      className="about-text-h bg-transparent block text-sa text-xl md:text-4xl lg:text-5xl"
                    >
                      Commitment to Quality
                    </motion.h1>
                  </div>

                  <div className="mt-1 max-w-3xl bg-white">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ margin: "-20px", amount: 0.5 }}
                      variants={pAnimation}
                      className="text-about mt-5 bg-transparent text-start md:text-justify  dark:text-white"
                    >
                      I always aim for precision and excellence. With expertise
                      in ReactJS, Redux, and databases, I deliver top-quality
                      work, driven by a passion for the latest technologies.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdpage;
