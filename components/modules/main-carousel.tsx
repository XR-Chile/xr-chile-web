"use client"
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { carouselItems } from '@/app/data/mainCarouselItems'

export const MainCarousel = () => (
  <Carousel 
    opts={{
      align: "start",
      loop: true,
    }}
    className="w-auto items-center h-full">
    <CarouselContent className='-ml-4'>
      {carouselItems.map(({ title, description, image }, index) => (
        <CarouselItem key={index} className='pl-0'>
          <Card className="shadow-none rounded-none border-b-4 bg-cover bg-center relative w-full h-svh border-none" style={{ backgroundImage: `url(${image})` }}>
            <CardContent className="absolute left-10 bottom-20 items-center justify-center flex-col bg-bg rounded bg-overlay shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-3xl font-base text-bg">{title}</h2>
              <p className='text-bg'>{description}</p>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className='left-5 size-16' />
    <CarouselNext className='right-5 size-16' />
  </Carousel>
)
