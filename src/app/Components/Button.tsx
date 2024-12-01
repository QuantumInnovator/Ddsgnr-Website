import React from 'react'

function Button() {
  return (
    <div className='flex justify-center items-center mt-7'>
      <button className='px-6 py-2 bg-white text-black font-thin border-2 border-black rounded-lg shadow-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-black'>
        View All Courses
      </button>
    </div>
  )
}

export default Button
