import React from "react";
import { scrollToSection } from "../Utility/scrollUtils";
import "@/app/components/styles/Hero.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { h2Animation, pAnimation } from "../Utility/animations";

const Hero = () => {
  return (
    <>
      <section id="home" className="Hero-section overflow-x-hidden">
        <div className="Grid-section">
          <div className="Div-section">
            <motion.h2
              className="H-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px", amount: 0.5 }}
              variants={h2Animation}
            >
              I&apos;m Sarath, a passionate Full Stack Developer.
            </motion.h2>
            <motion.div
              className="Line-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px", amount: 0.5 }}
              variants={pAnimation}
            >
              <h1 className="content-section" style={{ lineHeight: "1.2" }}>
                I specialize in creating innovat
                <span className="text-white">ive and efficient web solut</span>
                ions, leveraging my expertise in modern&nbsp;
                <span className="text-white">
                  technologies to deliver high-qual
                </span>
                ity code and exceptional user experiences.
              </h1>
            </motion.div>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px", amount: 0.5 }}
              variants={pAnimation}
              onClick={() => scrollToSection("about")}
            >
              <Link
                href="mailto:sarathteja14@gmail.com?subject=Reached out from portfolio"
                className="Hire-section"
              >
                Hire
              </Link>
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px", amount: 0.5 }}
              variants={pAnimation}
              onClick={() => scrollToSection("about")}
              className="About-section"
            >
              About Me
            </motion.span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
