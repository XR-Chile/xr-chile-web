import { addCategoryAndIDsToProducts } from "@/lib/utils";
import { Category } from "./enums";

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
