"use client";
import Lenis from "lenis";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import useDisableRightClick from "./Utility/useDisableRightClick";

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
  return (
    <>
      <div className="select-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
