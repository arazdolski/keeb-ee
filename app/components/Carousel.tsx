import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface CarouselComponentProps {
  images: string[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  return (
    <Carousel className='w-full max-w-xs'>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <img
                src={image}
                alt={`carousel-item-${index}`}
                className='object-cover '
                width={1200} // increase the width
                height={1200} // increase the height
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
