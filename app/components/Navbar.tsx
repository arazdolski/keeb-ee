"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex sm:justify-center w-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center align-left sm:absolute sm:left-1/2 sm:-translate-x-1/2">
              <Link href="/">
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center">
                  <p className="pt-4 pl-2 sm:pt-0 sm:pr-1 text-left">
                    Welcome to
                  </p>
                  <Image
                    src="/keeb-logo-horizontal-void.svg"
                    width={250}
                    height={250}
                    alt="Picture of the author"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;