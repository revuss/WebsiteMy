import { pAnimation } from "@/app/Utility/animations";
import { motion } from "framer-motion";
import React from "react";

const FirstPage = () => {
  return (
    <>
      <div className="first-page  bg-white">
        <div className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-[85rem] bg-white mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-3xl text-start mx-auto bg-white">
                <div className="mt-20 bg-white">
                  <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-20px", amount: 0.5 }}
                    variants={pAnimation}
                    className="about-text-h bg-white block text-sa text-xl md:text-4xl lg:text-5xl"
                  >
                    My Tech Journey
                  </motion.h1>
                </div>

                <div className="max-w-3xl bg-white">
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-20px", amount: 0.5 }}
                    variants={pAnimation}
                    className="text-about bg-white mt-5 text-justify"
                  >
                    In the fast-paced digital world, I&apos;ve dived into
                    innovation, strategic problem-solving, and continuous
                    learning. Here&apos;s a look at the key principles that
                    guide me.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
