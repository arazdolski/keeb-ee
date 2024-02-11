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
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className='flex justify-center items-center'>
      <UICarousel
        plugins={[plugin.current]}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className='flex justify-center items-center sm:w-1/2 object-scale-down h-1/2 w-full'
            >
              <img
                src={image}
                alt={`carousel-item-${index}`}
                className='w-3/4 h-1/2 sm:w-1/2'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </UICarousel>
    </div>
  );
};

export default CarouselComponent;
