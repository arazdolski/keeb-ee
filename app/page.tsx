import Image from 'next/image';
import Navbar from './components/Navbar';
import Section from './components/Section';

export default function Home() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
        <p>
          Our community revolves around a passion for mechanical keyboards.{' '}
          <br />
          We build, share, design keebs, but it's mostly to make friends and
          goof around. <br />
          Each of us has a unique vision for how a keyboard should look and
          feel.
          <br />
          Sending love from chilly Estonia!
        </p>
        <Section
          heading='Upcoming event'
          logo='/illustration-CLAP.svg'
          logoPosition='left'
        >
          <Image
            src='/Keebuary-banner.png'
            width={1200}
            height={800}
            alt='Picture of the author'
          />
        </Section>
        <Section heading='Keebs we have built'>
          <Image
            src='/Keebuary-banner.png'
            width={1200}
            height={800}
            alt='Picture of the author'
          />
        </Section>
        <Section heading='Meet-ups we have had'>
          <Image
            src='/Keebuary-banner.png'
            width={1200}
            height={800}
            alt='Picture of the author'
          />
        </Section>
      </header>
    </main>
  );
}
