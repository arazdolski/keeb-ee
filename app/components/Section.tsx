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
  imageSrc,
  imageSide,
}) => {
  return (
    <div className={`flex flex-col items-center w-full `}>
      <div
        className={`flex items-center justify-center ${
          imageSide === 'right' ? 'flex-row-reverse' : ''
        }`}
      >
        {imageSrc && (
          <div
            className={`absolute w-14 md:w-32 z-10 p-2 ${
              imageSide === 'right'
                ? 'ml-[300px] md:ml-[400px]'
                : 'mr-[300px] md:mr-[400px]'
            }`}
          >
            <Image
              src={imageSrc}
              alt='hand icon'
              width={64}
              height={64}
              className={`absolute md:w-32 md:h-32`}
            />
          </div>
        )}
        <h2 className='text-lg md:text-4xl z-20 font-bold m-8 uppercase whitespace-nowrap'>
          {heading}
        </h2>
      </div>
      <div className='w-3/4 border-t border-gray-300'></div>
      <div className='w-full flex items-center justify-center py-4 mt-2 mb-2'>
        {children}
      </div>
      <div className='w-3/4 border-b border-gray-300'></div>
    </div>
  );
};

export default Section;
