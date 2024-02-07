import React from 'react';
import { Carousel } from '@/components/ui/carousel';

interface CarouselComponentProps {
  images: string[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`carousel-item-${index}`} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
