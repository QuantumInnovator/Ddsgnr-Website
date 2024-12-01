'use client'
import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Cards3 Component with default props
function Cards3({ imageSrc = "/images/default-avatar.png", name = "Default Name", profession = "Default Profession" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once when the element comes into view
    threshold: 0.1,     // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={`bg-gray-100 w-64 h-72 mt-20 mx-auto border rounded-lg shadow-md p-4 flex flex-col items-center text-center sm:w-80 sm:h-88 transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${inView ? 'flip-card' : ''} hover:scale-105 hover:shadow-2xl hover:opacity-90`}
    >
      {/* Star Ratings */}
      <div className="flex justify-center mb-4">
        <span className="text-black text-lg">&#9733;</span>
        <span className="text-black text-lg">&#9733;</span>
        <span className="text-black text-lg">&#9733;</span>
        <span className="text-black text-lg">&#9733;</span>
        <span className="text-black text-lg">&#9733;</span>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm sm:text-base overflow-hidden">
        &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare.&quot;
      </p>

      {/* Profile Information */}
      <div className="flex items-center mt-3">
        <Image
          className="rounded-full border-2 border-gray-200"
          src={imageSrc} // Use the passed or default image
          alt="Profile"
          width={40}
          height={40}
        />
        <div className="ml-3 text-left mt-4">
          <p className="text-black font-bold text-sm sm:text-base">
            {name} {/* Use the passed or default name */}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            {profession} {/* Use the passed or default profession */}
          </p>
        </div>
      </div>
    </div>
  );
}

// CardsContainer Component with multiple cards
function CardsContainer() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-8">
      {/* Three Cards with Different Images */}
      <Cards3
        imageSrc="/avatar.png"  // First image
        name="James Nduku"
        profession="Software Developer"
      />
      <Cards3
        imageSrc="/avatar2.png"  // Second image
        name="Alice Johnson"
        profession="Scrum Master"
      />
      <Cards3
        imageSrc="/avatar3.png"  // Third image
        name="Mark Smith"
        profession="UI/UX Design"
      />
    </div>
  );
}

export default CardsContainer;


