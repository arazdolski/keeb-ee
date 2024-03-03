import Image from 'next/image';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import boardImages from './data/boardImages';
import eventImages from './data/eventImages';

export default function Home() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
        <div className=' flex items-center justify-center h-auto flex-col md:flex-row md:pt-8 pt-4 pb-8'>
          <div className='h-auto flex items-center justify-start'>
            <div className='text-left md:w-1/2 m-auto'>
              <p className='m-auto p-2 text-lg sm:text-2xl md:text-2xl lg:text-2xl md:w-full text-left'>
                Our community revolves around passion for mechanical keyboards.{' '}
                <br />
                We build, share and design keebs, but it&apos;s mostly to make
                friends and goof around. <br />
                Each of us has a unique vision for how a keyboard should look
                and feel.
                <br />
                <br />
                Sending love from chilly Estonia! &#60;3
              </p>
            </div>
          </div>
        </div>
        <Section
          heading='Upcoming events'
          imageSrc='/logos/Illustration-CLAP.svg'
          imageSide='right'
        >
          <a
            href='https://fb.me/e/6voWvbQmr'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/banners/pixo_banner.jpg'
              width={1200}
              height={800}
              alt='Banner image of the upcoming keeb.ee event'
            />
          </a>
        </Section>
        <Section
          heading="Keebs we've built"
          imageSrc='/logos/Illustration-PRESENTING.svg'
          imageSide='left'
        >
          <Carousel images={boardImages} />
        </Section>
        <Section
          heading="Meet-ups we've had"
          imageSrc='/logos/Illustration-LOVE.svg'
          imageSide='right'
        >
          <Carousel images={eventImages} />
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
