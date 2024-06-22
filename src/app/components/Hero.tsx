import React from "react";
import { scrollToSection } from "../Utility/scrollUtils";
import "@/app/components/styles/Hero.css";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section id="home" className="Hero-section">
        <div className="Grid-section">
          <div className="Div-section">
            <h2 className="H-section">
              I&apos;m Sarath, a passionate Full Stack Developer.
            </h2>
            <div className="Line-section">
              <h1 className="content-section" style={{ lineHeight: "1.2" }}>
                I specialize in creating innovat
                <span className="text-white">ive and efficient web solut</span>
                ions, leveraging my expertise in modern&nbsp;
                <span className="text-white">
                  technologies to deliver high-qual
                </span>
                ity code and exceptional user experiences.
              </h1>
            </div>
            <Link
              href="mailto:sarathteja14@gmail.com?subject=Reached out from portfolio"
              className="Hire-section"
            >
              Hire
            </Link>
            <span
              onClick={() => scrollToSection("about")}
              className="About-section"
            >
              About Me
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
