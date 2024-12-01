"use client";
import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-5 py-3 bg-white dark:bg-gray-800 relative">
      {/* Logo */}
      <div className="mr-1 flex justify-start">
        <Image
          src="/logo1.png"
          alt="Logo"
          width={150}
          height={150}
          priority
          layout="intrinsic"
          className="md:w-[200px] md:h-[200px] lg:w-[150px] lg:h-[150px] hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Desktop Menu (hidden on screens smaller than lg) */}
      <ul className="hidden lg:flex gap-10 justify-center text-sm xl:text-base text-gray-800 dark:text-gray-200">
        {["Home", "Courses", "Service", "Achievement", "About Us", "Testimonials"].map((item) => (
          <li
            key={item}
            className="hover:text-blue-500 cursor-pointer hover:translate-y-[-2px] transition-all duration-300"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Buttons (hidden on screens smaller than lg) */}
      <div className="hidden lg:flex gap-4">
        <button className="px-6 py-2 border-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-gray-800 dark:text-gray-200 dark:border-gray-700">
          Login
        </button>
        <button className="px-6 py-2 border-2 rounded-xl text-white bg-black hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600">
          SignUp
        </button>
      </div>

      {/* Hamburger Menu for Mobile and Tablet (visible on md and smaller) */}
      <div
        className="flex flex-col cursor-pointer space-y-2 lg:hidden z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span
          className={`block w-8 h-1 bg-black dark:bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-black dark:bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-black dark:bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </div>

      {/* Mobile Menu (visible only on screens smaller than lg) */}
      <div
        className={`${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100 ease-out"
            : "-translate-x-full opacity-0 ease-in"
        } absolute top-0 left-0 w-[75%] bg-white dark:bg-gray-800 p-5 z-40 shadow-md lg:hidden transition-all duration-500 transform`}
      >
        <ul className="flex flex-col gap-4 text-gray-800 dark:text-gray-200">
          {["Home", "Courses", "Service", "Achievement", "About Us", "Testimonials"].map((item) => (
            <li
              key={item}
              className="hover:text-blue-500 cursor-pointer transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 mt-4">
          <button className="px-6 py-2 border-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-gray-800 dark:text-gray-200 dark:border-gray-700">
            Login
          </button>
          <button className="px-6 py-2 border-2 rounded-xl text-white bg-black hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



