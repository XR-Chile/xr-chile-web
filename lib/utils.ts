import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
};

export const addCategoryAndIDsToProducts = (products: Omit<Product, 'id'>[], category: Category): Product[] => {
  return products.map((product, index) => ({
    id: generateHash(`${product.name}-${index}`), // Agregar un índice para evitar colisiones
    ...product,
    category: category,
  }));
}
