import { notFound } from "next/navigation";
import { cameras, pico } from "@/app/data/products";
import { Category } from "@/app/data/enums";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export async function generateStaticParams() {
  const allProducts = [...cameras, ...pico];

  return allProducts.map((product) => ({
    category: product.category.toString(),
    id: product.id.toString(),
  }));
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ category: Category; id: string }>;
}) {
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
    <section className="relative w-full flex flex-col items-center justify-center">
      <div className="w-full flex-grow flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={600}
          quality={100}
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
    </section>
  );
}
