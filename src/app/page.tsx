"use client";
import Lenis from "lenis";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import useDisableRightClick from "./Utility/useDisableRightClick";
import useReveal from "./Utility/Reveal";

const Hero = dynamic(() => import("@/app/components/Hero"), { ssr: true });
const About = dynamic(() => import("@/app/components/About/main"), {
  ssr: true,
});
const Skills = dynamic(() => import("@/app/components/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/app/components/Projects"), {
  ssr: true,
});

const Contact = dynamic(() => import("@/app/components/Contact"), {
  ssr: true,
});

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      // direction: "horizontal",
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  useDisableRightClick();
  useReveal();

  return (
    <>
      <div className="select-none">
        <div className="overflow-x-hidden">
          {" "}
          <Hero />
        </div>
        <About />
        <div className="overflow-x-hidden">
          {" "}
          <Skills />
        </div>
        <div className="overflow-x-hidden">
          {" "}
          <Projects />
        </div>
        <div className="overflow-x-hidden">
          <Contact />
        </div>
      </div>
    </>
  );
}
