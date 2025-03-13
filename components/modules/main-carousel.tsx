"use client"
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import image1 from '@/public/images/carousel/image1.webp'
import image2 from '@/public/images/carousel/image2.webp'
import image3 from '@/public/images/carousel/image3.jpg'
import image4 from '@/public/images/carousel/image4.jpg'
import image5 from '@/public/images/carousel/image5.jpg'

const textBoxes = [
  {
    title: 'Test',
    description: 'Este es el test pequeño y es el ',
    image: image1,
  },
  {
    title: 'Test',
    description: 'Este es el test un mas largo y es el ',
    image: image2,
  },
  {
    title: 'Test',
    description: 'Este es el test medianamente largo y es el ',
    image: image3,
  },
  {
    title: 'Test',
    description: 'Este es el test casi mas largo que los demas y es el ',
    image: image4,
  },
  {
    title: 'Test',
    description: 'Este test es mas largo en texto que todos los demas y es el test ',
    image: image5,
  }
]

export const MainCarousel = () => (
  <Carousel className="w-auto items-center h-full">
    <CarouselContent className='-ml-4'>

      {
        textBoxes.map(({ title, description, image }, index) => (
          <CarouselItem key={index} className='pl-0'>
            <Card className="shadow-none rounded-none border-b-4 bg-cover bg-center relative w-full h-svh border-none" style={{ backgroundImage: `url(${image.src})` }}>
              <CardContent className="absolute left-10 bottom-20 items-center justify-center flex-col bg-bg rounded bg-overlay shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-3xl font-base text-bg">{title}</h2>
                <p className='text-bg'>{description + index}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))
      }

    </CarouselContent>
    <CarouselPrevious className='left-5 size-16' />
    <CarouselNext className='right-5 size-16' />
  </Carousel>
)
