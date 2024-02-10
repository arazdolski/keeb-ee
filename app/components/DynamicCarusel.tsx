import dynamic from 'next/dynamic';

// Dynamically import the Carousel, which will be loaded only on the client side
const Carousel = dynamic(() => import('./Carousel'), {
  ssr: false,
});

export default Carousel;
