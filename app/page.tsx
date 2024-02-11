import Image from "next/image";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import boardImages from "./data/boardImages";
import eventImages from "./data/eventImages";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
        <div className=" flex items-center justify-center h-auto flex-col md:flex-row md:pt-8 pt-4 pb-8">
          <div className=" h-auto flex items-center justify-start text-center">
            <div className="text-left md:text-center md:w-1/2 m-auto">
              <p className="m-auto p-2 text-xl sm:text-2xl md:text-2xl lg:text-2xl  md:w-full">
                Our community revolves around a passion for mechanical
                keyboards. <br />
                We build, share, design keebs, but it&apos;s mostly to make
                friends and goof around. <br />
                Each of us has a unique vision for how a keyboard should look
                and feel.
                <br />
                <br />
                Sending love from chilly Estonia!
              </p>
            </div>
          </div>
        </div>
        <Section
          heading="Upcoming events"
          imageSrc="/Illustration-CLAP.svg"
          imageSide="right"
        >
          <Image
            src="/Keebuary-banner.png"
            width={1200}
            height={800}
            alt="Banner image of the upcoming keeb.ee event"
          />
        </Section>

        <Section
          heading="Keebs we've built"
          imageSrc="/Illustration-PRESENTING.svg"
          imageSide="left"
        >
          <Carousel images={boardImages} />
        </Section>
        <Section
          heading="Meet-ups we've had"
          imageSrc="/Illustration-OK.svg"
          imageSide="right"
        >
          <Carousel images={eventImages} />
        </Section>
        <Footer
          imageUrl="/Illustration-PEACE.svg"
          logoUrl="/Join-TEXT.svg"
          innerLogoUrl="/Join-LOGO.svg"
        />
      </header>
    </main>
  );
}
