import { notFound } from 'next/navigation';
import { cameras, pico, Category, Product } from '@/app/data/products';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function ProductPage({ params }: { params: Promise<{ category: Category; id: string }> }) {
  const { category, id } = React.use(params);
  const productId = parseInt(id, 10);

  let productList: Product[] = [];

  if (category === Category.Camera) {
    productList = cameras;
  } else if (category === Category.PICO) {
    productList = pico;
  } else {
    return notFound();
  }

  const product = productList.find((p) => p.id === productId);

  if (!product) {
    return notFound();
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full flex-grow flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={800} // Ancho máximo de la imagen
          height={600} // Altura máxima de la imagen
          className="w-full h-auto max-h-screen object-contain"
          quality={100} // Opcional: para mantener la calidad de la imagen
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 bg-black bg-opacity-50 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl mt-2">${product.price}</p>
          </div>
          <Button className="px-6 py-3 rounded-lg text-xl duration-150"> Comprar </Button>
        </div>
      </div>
    </div>
  );
}
