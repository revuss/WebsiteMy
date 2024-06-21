import { gsap } from "gsap";
import { Collapse, CollapseOptions } from "flowbite";

class NavBarService {
  private collapseInstance: Collapse | null = null;

  initializeNavBar(targetEl: HTMLElement, triggerEl: HTMLElement) {
    this.initializeCollapse(targetEl, triggerEl);
    this.updateCollapseState(targetEl, window.innerWidth);

    window.addEventListener("resize", (event) => {
      this.handleResize(event, targetEl);
    });
  }

  private handleResize(event: Event, targetEl: HTMLElement) {
    const target = event.target as Window;
    this.updateCollapseState(targetEl, target.innerWidth);
  }

  private initializeCollapse(targetEl: HTMLElement, triggerEl: HTMLElement) {
    // console.log("Initializing Collapse", { targetEl, triggerEl });

    const options: CollapseOptions = {
      onCollapse: () => {
        // console.log("Collapse triggered");
        gsap.to(targetEl, {
          duration: 1,
          height: 0,
          opacity: 0,
          ease: "power4.inOut",
          onComplete: () => {
            targetEl.style.display = "none";
          },
        });
      },
      onExpand: () => {
        // console.log("Expand triggered");
        targetEl.style.display = "block";
        gsap.fromTo(
          targetEl,
          { height: 0, opacity: 0 },
          { duration: 1, height: "auto", opacity: 1, ease: "power2.inOut" }
        );
      },
      onToggle: () => {
        // console.log("Toggle triggered");
        const svgEl: SVGElement | null = triggerEl.querySelector("svg");
        if (svgEl) {
          gsap.to(svgEl, {
            duration: 0.5,
            rotate: svgEl.getAttribute("data-rotated") === "true" ? 0 : 360,
            ease: "power4.inOut",
            onComplete: () => {
              const isRotated = svgEl.getAttribute("data-rotated") === "true";
              svgEl.setAttribute("data-rotated", isRotated ? "false" : "true");
            },
          });
        }
      },
    };

    this.collapseInstance = new Collapse(targetEl, triggerEl, options);
    // console.log("Collapse instance created", this.collapseInstance);
  }

  private updateCollapseState(targetEl: HTMLElement, width: number) {
    if (this.collapseInstance) {
      if (width >= 768) {
        this.ensureTailwindDisplayClasses(targetEl, true);
        this.collapseInstance.expand();
      } else {
        this.collapseInstance.collapse();
        this.ensureTailwindDisplayClasses(targetEl, false);
      }
    }
  }

  private ensureTailwindDisplayClasses(
    targetEl: HTMLElement,
    expanded: boolean
  ) {
    if (expanded) {
      targetEl.classList.remove("hidden");
      targetEl.classList.add("block");
    } else {
      targetEl.classList.remove("block");
      targetEl.classList.add("hidden");
    }
  }
}

export default NavBarService;
