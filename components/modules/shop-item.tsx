'use client'
import { Product } from '@/app/data/products';
import Link from 'next/link';
import Image from 'next/image';

export const ShopItem = (product: Product) => {
  return (
    <Link href={`/tienda/${product.category}/product/${product.id}`} 
    className="border-border rounded-[2.5px] h-full w-full">
        <Image src={product.image}
        width={240}
        height={240}
        alt={product.name} 
        className="object-cover aspect-square w-full p-1 rounded-lg"/>
        <div className="w-full flex flex-col justify-between items-left py-4 px-8">
          <h2 className="text-4xl font-bold text-black2">{product.name}</h2>
          <p className='text-gray font-semibold'>${product.price} USD.</p>
        </div>
    </Link>
  );
};