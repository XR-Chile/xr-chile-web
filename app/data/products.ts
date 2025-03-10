export enum Category {
  Camera = 'camera',
  PICO = 'pico'
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: Category;
}

export const generateHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convertir a entero de 32 bits
  }
  return Math.abs(hash); // Asegurarnos de que sea positivo
};

const addCategoryAndIDsToProducts = (products: Omit<Product, 'id'>[], category: Category): Product[] => {
  return products.map((product, index) => ({
    id: generateHash(`${product.name}-${index}`), // Agregar un índice para evitar colisiones
    ...product,
    category: category,
  }));
}

// Lista de productos sin IDs asignados manualmente
export const cameras: Product[] = addCategoryAndIDsToProducts(
  [
    { name: 'Camera 1', price: 100, image: '/images/cameras/cam1.png' },
    { name: 'Camera 2', price: 200, image: '/images/cameras/cam1.png' },
    { name: 'Camera 3', price: 300, image: '/images/cameras/cam1.png' },
    { name: 'Camera 4', price: 400, image: '/images/cameras/cam1.png' },
    { name: 'Camera 5', price: 400, image: '/images/cameras/cam1.png' },
    { name: 'Camera 6', price: 400, image: '/images/cameras/cam1.png' },
  ],
  Category.Camera
);

export const pico: Product[] = addCategoryAndIDsToProducts(
  [
    { name: 'Pico 1', price: 100, image: '/images/PICO/Pico1.webp' },
    { name: 'Pico 2', price: 200, image: '/images/PICO/Pico1.webp' },
    { name: 'Pico 3', price: 300, image: '/images/PICO/Pico1.webp' },
    { name: 'Pico 4', price: 400, image: '/images/PICO/Pico1.webp' },
    { name: 'Pico 5', price: 399, image: '/images/PICO/Pico1.webp' },
    { name: 'Pico 6', price: 600, image: '/images/PICO/Pico1.webp' },
  ],
  Category.PICO
);