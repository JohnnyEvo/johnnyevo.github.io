export const useModal = () => {
    const bodyElement = document.querySelector('body') as HTMLElement;
    const elements: Element[] = Array.from(document.getElementsByClassName("project-js"));

    elements.forEach(element => {
        element.addEventListener("click", () => {
            const modalEvent = new CustomEvent('modal', {detail: element});
            bodyElement.dispatchEvent(modalEvent);
        });
    })
}
