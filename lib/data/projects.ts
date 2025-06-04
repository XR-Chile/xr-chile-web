import { addIDsToProjects } from "@/lib/utils";

export const projects: Project[] = addIDsToProjects([
  {
    title: "Proyecto 1",
    description: "Este es un proyecto increíble.",
    image: "images/projects/project1.jpg",
    text: "Este es un texto adicional para el proyecto en el cual se describe mas a profundidad los alcances, metas y etcs.",
  },
  {
    title: "Proyecto 2",
    description: "Este es otro proyecto increíble.",
    image: "images/projects/project2.jpg",
    text: "Este es un texto adicional para el proyecto en el cual se describe mas a profundidad los alcances, metas y etcs.",
  },
  {
    title: "Proyecto 3",
    description: "Este es un proyecto más.",
    image: "images/projects/project3.jpg",
    text: "Este es un texto adicional para el proyecto en el cual se describe mas a profundidad los alcances, metas y etcs.",
  },
]);
