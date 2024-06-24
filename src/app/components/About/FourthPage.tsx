import { pAnimation } from "@/app/Utility/animations";
import { motion } from "framer-motion";
import React from "react";

const FourthPage = () => {
  return (
    <>
      <div>
        <div className="fifth-page  bg-white">
          <div className="relative overflow-hidden bg-white">
            <div className="relative z-10 bg-white">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
                <div className="max-w-3xl text-start mx-auto bg-white">
                  <div className="mt-1 max-w-2xl bg-white">
                    <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ margin: "-20px", amount: 0.5 }}
                      variants={pAnimation}
                      className="about-text-h block bg-white text-sa text-xl md:text-4xl lg:text-5xl"
                    >
                      Embracing Diversity
                    </motion.h1>
                  </div>

                  <div className="mt-1 max-w-3xl bg-white">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ margin: "-20px", amount: 0.5 }}
                      variants={pAnimation}
                      className="text-about mt-5 text-start bg-white md:text-justify  dark:text-white"
                    >
                      Technology is a vast field, and I&apos;ve explored many of
                      its areas. From data annotation to SEO analysis and more,
                      my varied experiences enrich my skills and perspectives.
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

export default FourthPage;
