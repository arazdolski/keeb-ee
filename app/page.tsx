import Image from 'next/image';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import CarouselComponent from './components/Carousel'; // adjust the path as needed

export default function Home() {
  const images = [
    '/Boards/DSC03620.jpg', // replace with your actual image paths
    '/Boards/DSC03703.jpg',
    '/Boards/DSC03736.jpg',
    '/Boards/DSC03805.jpg',
    '/Boards/DSC08854.jpg',
    '/Boards/DSC08855.jpg',
    '/Boards/DSC08859.jpg',
    '/Boards/DSC08910.jpg',
    '/Boards/DSC08920.jpg',
    '/Boards/DSC08928.jpg',
    '/Boards/DSC08958.jpg',
    '/Boards/DSC08981.jpg',
    '/Boards/DSC09633.jpg',
    '/Boards/DSC09663.jpg',
    '/Boards/DSC09688.jpg',
    '/Boards/DSC09720.jpg',
    '/Boards/DSC09745.jpg',
  ];

  return (
    <main>
      <header>
        <Navbar></Navbar>
        <div className='relative flex items-center justify-center md:h-screen h-auto flex-col md:flex-row md:pt-0 pt-4'>
          <div className='md:absolute  h-auto flex items-center justify-start'>
            <div className='text-left  md:w-1/2 m-auto'>
              <p className='pt-8 pb-2 pl-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                Our community revolves around a passion for mechanical
                keyboards. <br />
                We build, share, design keebs, but it's mostly to make friends
                and goof around. <br />
                Each of us has a unique vision for how a keyboard should look
                and feel.
                <br />
                <br />
                Sending love from chilly Estonia!
              </p>
            </div>
          </div>
        </div>
        <Section heading='Upcoming events'>
          <Image
            src='/Keebuary-banner.png'
            width={1200}
            height={800}
            alt='Banner image of the upcoming keeb.ee event'
          />
        </Section>

        <Section heading='Keebs we have built'>
          <CarouselComponent images={images} />
        </Section>
        <Section heading='Meet-ups we have had'>
          <CarouselComponent images={images} />
        </Section>
        <Footer
          imageUrl='/logos/Illustration-PEACE.svg'
          logoUrl='/logos/Join-TEXT.svg'
          innerLogoUrl='/logos/Join-LOGO.svg'
        />
      </header>
    </main>
  );
}
