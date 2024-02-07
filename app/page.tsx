import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
        <div className="flex flex-col items-center justify-center">
          <div className="w-3/4 border-t border-gray-300"></div>
          <div className="w-full text-white flex align-center text-center py-4 mt-2 mb-2">
            <Image
              src="/Keebuary-banner.png"
              width={1000}
              height={1000}
              alt="Picture of the author"
            />
          </div>
          <div className="w-3/4 border-b border-gray-300"></div>
        </div>
      </header>
    </main>
  );
}
