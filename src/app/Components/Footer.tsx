'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ error: '', success: false });

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage({ error: 'Please enter a valid email address.', success: false });
    } else {
      setMessage({ error: '', success: true });
      console.log('Subscribed with email:', email);
    }
  };

  const menuItems = [
    {
      title: 'Courses',
      links: [
        { label: 'Figma UI System', href: '#' },
        { label: 'Icons Assets', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Documentation', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'FAQs', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Documentation', href: '#' },
      ],
    },
    {
      title: 'About Us',
      links: [
        { label: 'News', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Documentation', href: '#' },
      ],
    },
  ];

  return (
    <footer className="w-full p-4 md:p-8 mx-auto mt-10 max-w-screen-lg animate-fadeIn bg-white dark:bg-gray-900">
      {/* Subscription Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 mb-6">
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white transition-transform transform hover:scale-105">
            Subscribe to our newsletter
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
            Stay updated with the latest news and exclusive offers!
          </p>
        </div>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row items-center w-full md:w-auto gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            aria-label="Email address"
            className="w-full md:w-64 h-12 px-4 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="h-12 px-6 bg-slate-100 border border-gray-400 text-black rounded-md hover:bg-blue-700 dark:bg-slate-700 dark:border-gray-600 dark:text-white hover:scale-110 transition-transform"
          >
            Subscribe
          </button>
        </form>
      </div>
      {message.error && <p className="text-red-500 text-sm mt-2">{message.error}</p>}
      {message.success && <p className="text-green-500 text-sm mt-2">Subscription successful! 🎉</p>}

      {/* Footer Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 py-10">
        <div className="col-span-full lg:col-span-2">
          <Image src="/logo1.png" alt="Company logo" width={150} height={50} className="transition-transform transform hover:scale-110" />
        </div>
        {menuItems.map((section, index) => (
          <div key={index}>
            <h4 className="font-medium mb-4 text-gray-900 dark:text-white">{section.title}</h4>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom Section */}
      <div className="py-4 border-t border-gray-200 dark:border-gray-600 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 YourCompany, All rights reserved. <a href="#" className="hover:underline">Privacy Policy</a> ·{' '}
          <a href="#" className="hover:underline">Terms of Service</a> ·{' '}
          <a href="#" className="hover:underline">Cookies Settings</a>
        </p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-transform transform hover:scale-110">
            <FaFacebook size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-transform transform hover:scale-110">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500 transition-transform transform hover:scale-110">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Linkedin" className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500 transition-transform transform hover:scale-110">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
