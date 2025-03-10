import { Product } from '@/app/data/products';
import { ShopItem } from '@/components/modules/shop-item';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ShopCarouselProps {
  products: Product[];
  basis: string;
}

const buttons : string = 
    "absolute rounded-full size-16 bg-gray shadow-inner border-0 transition-500";

export const ShopCarousel = ({ products, basis }: ShopCarouselProps) => {
  return (
    <Carousel className='w-full max-w-7xl mx-auto mb-16'>
        <CarouselContent>
            {products.map((product) => (
                <CarouselItem key={product.id} className={basis}>
                <div className="p-2">
                <Card className=''>
                    <CardContent className="flex items-center justify-center p-0">
                    <ShopItem key={`${product.category}-${product.id}`} {...product} />
                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className={buttons + " -left-20"} />
        <CarouselNext className={buttons + " -right-20"} />
    </Carousel>
  );
};