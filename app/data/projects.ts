import { generateHash } from './products'; // Importar la función generateHash desde products.ts

export interface Project {
    id: number;         // Identificador único del proyecto
    title: string;      // Título del proyecto
    description: string; // Descripción del proyecto
    image: string;      // Imagen del proyecto
    text: string;      // Texto del proyecto
}

const addIDsToProjects = (projects: Omit<Project, 'id'>[]): Project[] => {
  return projects.map((project, index) => ({
    id: generateHash(`${project.title}-${index}`), // Generar un ID único basado en el título y el índice
    ...project,
  }));
}

export const projects: Project[] = addIDsToProjects([
  {
    title: 'Proyecto 1',
    description: 'Este es un proyecto increíble.',
    image: '/images/projects/project1.jpg',
    text: 'Este es un texto adicional para el proyecto en el cual se describe mas a profundidad los alcances, metas y etcs.'
  },
  {
    title: 'Proyecto 2',
    description: 'Este es otro proyecto increíble.',
    image: '/images/projects/project2.jpg',
    text: 'Este es un texto adicional para el proyecto en el cual se describe mas a profundidad los alcances, metas y etcs.'
  },
  {
    title: 'Proyecto 3',
    description: 'Este es un proyecto más.',
    image: '/images/projects/project3.jpg',
    text: 'Este es un texto adicional para el proyecto en el cual se describe mas a profundidad los alcances, metas y etcs.'
  },
]);