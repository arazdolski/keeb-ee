'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel as UICarousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

interface CarouselComponentProps {
  images: { src: string; alt: string }[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="flex justify-center items-center">
      <UICarousel
        plugins={[plugin.current]}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center sm:w-1/2 object-scale-down h-1/2 w-full "
            >
              <div className="shadow-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </UICarousel>
    </div>
  );
};

export default CarouselComponent;
