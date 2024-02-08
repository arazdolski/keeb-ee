import Image from "next/image";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
        <p className="pt-8 pb-2 pl-2 text-left sm:text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Our community revolves around a passion for mechanical keyboards.{" "}
          <br />
          We build, share, design keebs, but it's mostly to make friends and
          goof around. <br />
          Each of us has a unique vision for how a keyboard should look and
          feel.
          <br />
          <br />
          Sending love from chilly Estonia!
        </p>
        <Section heading="Upcoming event">
          <Image
            src="/Keebuary-banner.png"
            width={1200}
            height={800}
            alt="Banner image of the upcoming keeb.ee event"
          />
        </Section>
        <Section heading="Keebs we have built">
          <Image
            src="/Keebuary-banner.png"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
        </Section>
        <Section heading="Meet-ups we have had">
          <Image
            src="/Keebuary-banner.png"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
        </Section>
      </header>
    </main>
  );
}
