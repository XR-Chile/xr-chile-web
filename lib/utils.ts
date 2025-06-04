import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Category } from "@/lib/data/enums";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const generateHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
};

export const addCategoryAndIDsToProducts = (
  products: Omit<Product, "id">[],
  category: Category,
): Product[] => {
  return products.map((product, index) => ({
    id: generateHash(`${product.name}-${index}`),
    ...product,
    category: category,
  }));
};

export const addIDsToProjects = (
  projects: Omit<Project, "id">[],
): Project[] => {
  return projects.map((project, index) => ({
    id: generateHash(`${project.title}-${index}`),
    ...project,
  }));
};

export const getWhatsappNumber = async () => {
  return process.env.WHATSAPP_NUMBER ?? "56912345678";
};
