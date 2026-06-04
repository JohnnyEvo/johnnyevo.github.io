import { animate } from "motion";

export const useProjectsAppear = async () => {
    const elements = Array.from(document.querySelectorAll(".project-js")) as HTMLElement[];

    if (elements.length === 0) return;

    // Initial state: hidden and slightly translated
    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
    });

    // Staggered appearance
    for (const element of elements) {
        await animate(
            element,
            { opacity: 1, transform: "translateY(0)" },
            { duration: 0.5, easing: "ease-out" }
        ).finished;
    }
}
