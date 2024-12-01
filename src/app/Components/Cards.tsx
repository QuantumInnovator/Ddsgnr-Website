'use client';
import React from 'react';

function Cards() {
  // Array of card data with an additional icon property
  const cardData = [
    { title: 'Self Development', description: '50+ Courses Available', icon: 'self-development' },
    { title: 'Marketing', description: '50+ Courses Available', icon: 'marketing' },
    { title: 'Development', description: '50+ Courses Available', icon: 'development' },
    { title: 'Communication', description: '50+ Courses Available', icon: 'communication' },
    { title: 'Digital Marketing', description: '50+ Courses Available', icon: 'digital-marketing' },
    { title: 'Leadership', description: '50+ Courses Available', icon: 'leadership' },
    { title: 'Project Management', description: '50+ Courses Available', icon: 'project-management' },
    { title: 'Product Design', description: '50+ Courses Available', icon: 'product-design' },
    { title: 'Entrepreneurship', description: '50+ Courses Available', icon: 'entrepreneurship' },
  ];

  // Function to get the correct icon for each card based on its title
  const getIcon = (title: string) => {
    switch (title) {
      case 'Self Development':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-4-4l4 4 4-4" />
          </svg>
        );
      case 'Marketing':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l4 4 4-4m0 0V4m0 8h4" />
          </svg>
        );
      case 'Development':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v10l4 4 4-4V3" />
          </svg>
        );
      case 'Communication':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        );
      case 'Digital Marketing':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M3 12h18M3 16h18" />
          </svg>
        );
      case 'Leadership':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-4-4l4 4 4-4" />
          </svg>
        );
      case 'Project Management':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h12M6 12h12M6 16h12" />
          </svg>
        );
      case 'Product Design':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m6-6H6" />
          </svg>
        );
      case 'Entrepreneurship':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        );
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 bg-gray-50 dark:bg-gray-900 gap-y-12">
      {cardData.map((card, index) => (
        <div key={index} className="flex items-center p-4 bg-slate-200 dark:bg-gray-700 shadow-md rounded-lg transition-all transform hover:scale-105 hover:bg-slate-300 dark:hover:bg-gray-600 hover:shadow-xl hover:translate-y-1">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-500">
            {/* Render the appropriate icon based on the title of the card */}
            {getIcon(card.title)}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white transition-all hover:text-gray-900 dark:hover:text-gray-300">{card.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 transition-all hover:text-gray-700 dark:hover:text-gray-400">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

