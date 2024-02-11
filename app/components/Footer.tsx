import React from 'react';
import Image from 'next/image';

interface FooterProps {
  logoUrl: string;
  innerLogoUrl: string;
  imageUrl?: string;
}

const Footer: React.FC<FooterProps> = ({ logoUrl, innerLogoUrl, imageUrl }) => {
  return (
    <footer className='flex justify-around items-center space-x-36 p-6'>
      <div className='flex flex-col items-center'>
        <p className='mb-2 text-sm sm:text-base md:text-xl'>
          Hope we see ya!
          <br />
          Cheers!
        </p>

        {imageUrl && (
          <Image width={100} height={100} src={imageUrl} alt='Peace sign' />
        )}
      </div>
      <div className='relative ml-4 '>
        <Image
          width={1200}
          height={800}
          src={logoUrl}
          alt='logo'
          className='h-40 w-40 slow-spin'
        />
        <a
          href='https://discord.gg/nax9Trt6zg'
          target='_blank'
          title='Join our keeb.ee Discord server'
          rel='noopener noreferrer'
        >
          <Image
            src={innerLogoUrl}
            width={1200}
            height={800}
            alt='inner logo'
            className='absolute h-36 w-36 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
