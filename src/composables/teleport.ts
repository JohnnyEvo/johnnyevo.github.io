export const useTeleport = (element: HTMLElement) => {
    element.remove();
    (document.querySelector("body") as HTMLElement).appendChild(element);
}