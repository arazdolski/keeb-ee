import React from 'react';

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
        {imageUrl && <img src={imageUrl} alt='Peace sign' />}
      </div>
      <div className='relative ml-4 fixed'>
        <img src={logoUrl} alt='logo' className='h-40 w-40 slow-spin' />
        <a
          href='https://discord.gg/nax9Trt6zg'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={innerLogoUrl}
            alt='inner logo'
            className='absolute h-36 w-36 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
