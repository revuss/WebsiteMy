import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";

const useReveal = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll<HTMLElement>(".reveal-type");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars,words" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          markers: false,
        },
        y: 100,
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);
};

export default useReveal;
