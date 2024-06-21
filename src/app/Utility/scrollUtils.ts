// utils/scrollUtils.ts
import { animate } from "framer-motion";

// Function to animate scroll
export const animateScrollTo = (targetTop: number) => {
  const start = window.scrollY; // Use scrollY instead of pageYOffset
  const distance = targetTop - start;
  const duration = 1 * 1000; // 1 second

  animate(0, 1, {
    duration: duration / 1000,
    onUpdate: (latest) => {
      window.scrollTo(0, start + distance * latest);
    },
  });
};

// Function to scroll to a section
export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const top = section.offsetTop;
    animateScrollTo(top);
  }
};
