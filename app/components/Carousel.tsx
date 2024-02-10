'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel as UICarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface CarouselComponentProps {
  images: string[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className='flex justify-center items-center'>
      <UICarousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className='md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 h-64 object-cover'
            >
              <img
                src={image}
                alt={`carousel-item-${index}`}
                className='size-2/4 h-auto object-fit'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </UICarousel>
    </div>
  );
};

export default CarouselComponent;
