import React from 'react';
import Image from 'next/image';

interface SectionProps {
  heading: string;
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
  imageSide?: 'left' | 'right';
}

const Section: React.FC<SectionProps> = ({
  heading,
  children,
  className,
  imageSrc,
  imageSide,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center pt-8 ${className}`}
    >
      <div
        className={`flex flex-col md:flex-row items-center justify-center text-center ${
          imageSide === 'right' ? 'md:flex-row-reverse' : ''
        }`}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=''
            width={1200}
            height={800}
            className='w-24 h-24 md:w-32 md:h-32 object-cover mx-auto md:mx-0 md:ml-8 md:mr-8'
          />
        )}
        <h2 className='text-lg md:text-3xl font-bold mb-8 uppercase md:-ml-8 whitespace-nowrap'>
          {heading}
        </h2>
      </div>
      <div className='w-3/4 border-t border-gray-300'></div>
      <div className='w-full text-white flex items-center justify-center py-4 mt-2 mb-2'>
        {children}
      </div>
      <div className='w-3/4 border-b border-gray-300'></div>
    </div>
  );
};

export default Section;
