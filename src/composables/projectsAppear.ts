import { animate } from "motion";

export const useProjectsAppear = async () => {
    const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if (!isMobile) {
        const leftElements = Array.from(
            (document.getElementById("left-side") as HTMLElement)
                .children as HTMLCollectionOf<HTMLElement>
        );
        const rightElements: Element[] = Array.from(
            (document.getElementById("right-side") as HTMLElement)
                .children as HTMLCollectionOf<HTMLElement>
        );

        let elements: HTMLElement[] = [];

        leftElements.forEach((leftElement, index) => {
            elements.push(leftElement);
            leftElement.style.opacity = "0";
            if (index in rightElements) {
                elements.push(rightElements[index] as HTMLElement);
                (rightElements[index] as HTMLElement).style.opacity = "0";
            }
        });

        for (const element of elements) {
            await animate(
                element,
                { opacity: 1, transform: "translateY(0)" },
                { duration: 0.7 }
            ).finished;
        }
    }
}