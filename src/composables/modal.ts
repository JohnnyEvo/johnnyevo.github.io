export const useModal = () => {
    const bodyElement = document.querySelector('body') as HTMLElement;
    const elements: HTMLElement[] = Array.from(document.querySelectorAll(".project-js")) as HTMLElement[];

    elements.forEach(element => {
        // Handle Click
        element.addEventListener("click", () => {
            triggerModal(element, bodyElement);
        });

        // Handle Keyboard (Enter and Space)
        element.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                triggerModal(element, bodyElement);
            }
        });
    })
}

const triggerModal = (element: HTMLElement, bodyElement: HTMLElement) => {
    const modalEvent = new CustomEvent('modal', {detail: element});
    bodyElement.dispatchEvent(modalEvent);
}
