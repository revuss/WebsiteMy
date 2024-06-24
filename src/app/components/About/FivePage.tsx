import { pAnimation } from "@/app/Utility/animations";
import { motion } from "framer-motion";
import React from "react";

const FivePage = () => {
  return (
    <>
      <div>
        <div className=" fifth-page  bg-white">
          <div className="relative bg-white">
            <div className="relative z-10 bg-white">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
                <div className="max-w-3xl text-start mx-auto bg-white">
                  <div className="mt-1 max-w-2xl bg-white">
                    <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ margin: "-20px", amount: 0.5 }}
                      variants={pAnimation}
                      className="about-text-h block bg-transparent text-sa text-xl md:text-4xl lg:text-5xl"
                    >
                      Let&apos;s Connect{" "}
                    </motion.h1>
                  </div>
                  <div className="mt-1 max-w-3xl bg-white">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ margin: "-20px", amount: 0.5 }}
                      variants={pAnimation}
                      className="text-about mt-5 bg-transparent text-start md:text-justify  dark:text-white "
                    >
                      Join me on this digital adventure where technology and
                      creativity come together to solve problems. If you&apos;re
                      interested in collaborating, let&apos;s connect and shape
                      the future of tech together!
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

export default FivePage;
