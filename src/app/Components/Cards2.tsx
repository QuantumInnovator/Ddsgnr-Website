'use client'
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Define a type for the course data
interface Course {
  image: string;
  title: string;
  category: string;
  text: string;
}

function Cards2() {
  // Array of course data with dynamic titles and categories
  const courses: Course[] = [
    {
      image: '/image2.png',
      title: 'UX/UI Design 201',
      category: 'Design',
      text: 'Learn the basics of web development and build your first website.',
    },
    {
      image: '/image3.png',
      title: 'Introduction to Python',
      category: 'Programming',
      text: 'Master JavaScript, the language of the web, and create dynamic applications.',
    },
    {
      image: '/image4.png',
      title: 'Data Analysis for Beginners',
      category: 'Business',
      text: 'Understand React and create interactive user interfaces.',
    },
    {
      image: '/image5.png',
      title: 'Art Specialization',
      category: 'Art',
      text: 'Discover backend development with Node.js and build powerful APIs.',
    },
    {
      image: '/image6.png',
      title: 'Rule of Law',
      category: 'Law',
      text: 'Explore data analysis with Python and make sense of complex datasets.',
    },
    {
      image: '/image7.png',
      title: 'Introduction to Webflow',
      category: 'Tech',
      text: 'Learn UI/UX design principles to craft beautiful and user-friendly designs.',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      {/* Heading Section */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">Courses</h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-xl text-center text-gray-600 dark:text-gray-300">
        Your Ultimate Guide to Learning
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Card Component */}
        {courses.map((course, index) => (
          <Card key={index} course={course} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-14">
        <button className="px-6 py-2 bg-white text-black font-thin border-2 border-black rounded-lg shadow-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-blue-600 dark:hover:text-white">
          View All Courses
        </button>
      </div>
    </div>
  );
}

const Card: React.FC<{ course: Course }> = ({ course }) => {
  // Intersection Observer hook for scroll-triggered animations
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`max-w-sm mx-auto border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
        ${inView ? 'flip-card' : ''} hover:scale-105 hover:shadow-2xl hover:opacity-90 dark:bg-gray-800 dark:border-gray-700`}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={course.image}
          alt={`Course ${course.title}`}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Category Heading */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 font-medium dark:text-gray-400">{course.category}</span>
          <span className="text-sm text-gray-500 flex items-center dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-yellow-400 mr-1"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            5.0
          </span>
        </div>

        {/* Course Title */}
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">{course.title}</h2>
        <p className="text-sm text-gray-600 mt-2 dark:text-gray-300">{course.text}</p>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-700 rounded hover:bg-gray-100 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-700">
            Enroll Now
          </button>
          <span className="text-lg font-semibold text-gray-800 dark:text-white">$400</span>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
