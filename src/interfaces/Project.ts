import type { ProjectContent } from "./ProjectContent"

export interface Project {
    id: Number
    miniature: String
    screenshot: String
    title: String
    description: String
    link: String
    progress_color: String
    contents: ProjectContent[]
}