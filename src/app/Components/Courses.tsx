'use client';
import React from 'react';

function Courses() {
  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto bg-white dark:bg-gray-800 transition-all duration-500 ease-in-out transform hover:scale-105 hover:opacity-90 opacity-0 animate__animated animate__fadeIn">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
        Explore Courses By Category
      </h1>
      <p className="mt-4 md:mt-6 text-center text-sm md:text-base font-thin text-gray-600 dark:text-gray-300 px-2 md:px-4">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
    </div>
  );
}

export default Courses;

