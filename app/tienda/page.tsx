import { cameras, pico } from '@/app/data/products';
import { ShopCarousel } from '@/components/modules/shop-carousel';

const basis = "basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4";

const titles = "text-6xl font-bold text-center";

export default function StorePage() {
  return (
    <main className="flex flex-col items-center">
      <h1 className={titles + " mt-20 mb-16"} >Camaras 360</h1>
      <ShopCarousel products={cameras} basis={basis} />
      <h1 className={titles + " mt-4 mb-16"} >PICO</h1>
      <ShopCarousel products={pico} basis={basis} />
    </main>
  );
}
