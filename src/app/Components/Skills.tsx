'use client';
import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full px-5 md:px-10 bg-white dark:bg-gray-800">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 md:p-10 flex items-start justify-center flex-col text-left opacity-0 animate-fadeIn">
        <h2 className="font-bold text-2xl md:text-5xl mb-4 transform transition-transform duration-500 hover:scale-105 hover:text-blue-500 dark:text-white">
          Learn new skills <br /> online with ease
        </h2>
        <p className="text-sm md:text-lg max-w-md mb-4 text-gray-800 dark:text-gray-300">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        
        {/* Button Container */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600">
            Start learning now
          </button>
          <button className="px-6 py-2 text-black bg-slate-50 border-2 border-black rounded-lg hover:bg-slate-500 transition-all duration-300 transform hover:scale-105 dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:bg-gray-600">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center relative opacity-0 animate-fadeIn animate-delay-200">
        <div className="relative w-full h-full transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
          <Image 
            src="/image1.png" 
            alt="Learning Skills"
            layout="responsive" 
            width={500}
            height={500}
            objectFit="contain"
            objectPosition="center"
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
