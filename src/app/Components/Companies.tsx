'use client';
import React from 'react';
import Image from 'next/image';

const Companies: React.FC = () => {
  return (
    <div className="mt-10 px-4 xs:mt-20 sm:mt-32 lg:mt-40 bg-white dark:bg-gray-800">
      {/* Container for text and logos */}
      <div className="flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-10">
        {/* Text Section */}
        <p className="font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 dark:text-white">
          Trusted by 2000+ companies <br className="md:hidden" /> worldwide.
        </p>

        {/* Logos Section */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {/* Logo Items with fade-in animation and hover effect */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative mx-auto opacity-0 animate-fadeIn transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Image
                src={`/L${index + 1}.png`}
                alt={`Company ${index + 1}`}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
