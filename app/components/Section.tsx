import React from 'react';

interface SectionProps {
  heading: string;
  children: React.ReactNode;
  logo?: string;
  logoPosition?: 'left' | 'right';
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  heading,
  children,
  logo,
  logoPosition = 'left',
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center pt-8 ${className}`}
    >
      <h2 className='text-2xl font-bold mb-2 uppercase p-4'>{heading}</h2>
      {logo && (
        <div
          className={`flex ${
            logoPosition === 'right' ? 'justify-end' : 'justify-start'
          } w-full`}
        >
          <img src={logo} alt='logo' className='h-24 w-24' />
        </div>
      )}
      <div className='w-3/4 border-t border-gray-300'></div>
      <div className='w-full text-white flex items-center justify-center py-4 mt-2 mb-2'>
        {children}
      </div>
      <div className='w-3/4 border-b border-gray-300'></div>
    </div>
  );
};

export default Section;
