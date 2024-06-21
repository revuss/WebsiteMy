import React from "react";
import { scrollToSection } from "../Utility/scrollUtils";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-[95vh] justify-center align-center flex mx-auto max-w-[90vw] select-none"
      >
        <div className="grid grid-cols-1 tracking-wide">
          <div className="mr-auto place-self-center">
            <h2 className="font-semibold leading-loose text-white text-sm md:text-xl mb-2 ">
              I&apos;m Sarath, a passionate Full Stack Developer.
            </h2>
            <div className="leading-loose mb-10">
              <h1
                className="text-2xl font-bold tracking-wide text-second text-start md:text-4xl lg:text-5xl xl:text-6xl "
                style={{ lineHeight: "1.2" }}
              >
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
              className="inline-flex items-center hover:text-primary justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-second focus:ring-4 focus:ring-transparent "
            >
              Hire
            </Link>
            <span
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center justify-center px-5 bg-white py-3 text-base font-medium text-center text-primary border-4 border-second rounded-lg hover:bg-gray-100 focus:ring-0 focus:ring-black"
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
