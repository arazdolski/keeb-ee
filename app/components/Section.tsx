import React from "react";

interface SectionProps {
  heading: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ heading, children, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center pt-8 ${className}`}
    >
      <h2 className="text-2xl font-bold mb-8 uppercase">{heading}</h2>
      <div className="w-3/4 border-t border-gray-300"></div>
      <div className="w-full text-white flex items-center justify-center py-4 mt-2 mb-2">
        {children}
      </div>
      <div className="w-3/4 border-b border-gray-300"></div>
    </div>
  );
};

export default Section;
