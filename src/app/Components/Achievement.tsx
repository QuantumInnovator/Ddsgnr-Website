'use client'
import React from 'react'
import 'animate.css';


function Achievement() {
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold animate__animated animate__fadeIn'>
        Our Achievements
      </h1>
      <p className='mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-center max-w-2xl animate__animated animate__fadeIn animate__delay-1s'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <div className='flex flex-col sm:flex-row flex-wrap justify-between mt-8 w-full max-w-4xl gap-y-6'>
        <div className='flex flex-col items-center w-full sm:w-auto sm:mx-4 md:mx-6 opacity-0 animate__animated animate__fadeIn animate__delay-2s'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>+200</h1>
          <h2 className='text-sm sm:text-base md:text-lg lg:text-xl'>Courses</h2>
        </div>
        <div className='flex flex-col items-center w-full sm:w-auto sm:mx-4 md:mx-6 opacity-0 animate__animated animate__fadeIn animate__delay-3s'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>50K</h1>
          <h2 className='text-sm sm:text-base md:text-lg lg:text-xl'>Mentors</h2>
        </div>
        <div className='flex flex-col items-center w-full sm:w-auto sm:mx-4 md:mx-6 opacity-0 animate__animated animate__fadeIn animate__delay-4s'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>370K</h1>
          <h2 className='text-sm sm:text-base md:text-lg lg:text-xl'>Students</h2>
        </div>
        <div className='flex flex-col items-center w-full sm:w-auto sm:mx-4 md:mx-6 opacity-0 animate__animated animate__fadeIn animate__delay-5s'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>100+</h1>
          <h2 className='text-sm sm:text-base md:text-lg lg:text-xl'>Recognition</h2>
        </div>
      </div>
    </div>
  )
}

export default Achievement;
