import { timeline } from "motion";

export const enter = async (element: HTMLElement) => {
    const sequence = [
        [element, { width: "0", height: "0" }],
        [element, { width: "100%", height: "3px" }, { duration: 0.3 }],
        [element, { height: "100%" }, { duration: 0.6 }],
        [element, { width: "96%", height: "96%" }, { duration: 0.7 }],
    ];

    await timeline(<[]>sequence).finished;
}

export const leave = async (element: HTMLElement) => {
    const sequence = [
        [element, { height: "100%", width: "100%"}, {duration: .3}],
        [element, {width: "100%", height: "3px"}, {duration: .6}],
        [element, {width: "0", height: "0"}],
      ]
    
      await timeline(<[]>sequence).finished;
}