'use client'
import React from 'react'


// Social Media Icons Component
type SocialLink = {
  href: string;
  color: string;
  iconPath: string;
};

// Social Media Icons Component
// Social Media Icons Component
const SocialIcons = ({ links }: { links: SocialLink[] }) => {
  return (
    <div className="flex space-x-6 justify-center">
      {links.map((link, index) => (
        <a
          href={link.href}
          key={index}
          className="text-gray-600 text-3xl"
          style={{ '--hover-color': link.color } as React.CSSProperties}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 hover:text-[var(--hover-color)]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.iconPath} />
          </svg>
        </a>
      ))}
    </div>
  );
};

function OurTeam() {
  const teamMembers = [
    { name: 'James Nduku', role: 'Marketing Coordinator', img: '/L.png', socialLinks: [
      { href: '#', color: 'blue-600', iconPath: 'M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 12h3v-7H7v7zm1.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8.5 8.5h-3v-4.5c0-.38-.03-.75-.14-1.04-.12-.3-.35-.56-.64-.78-.3-.22-.64-.35-1-.35-.85 0-1.4.48-1.4 1.26v5.22h-3v-7h3v.98h.04c.3-.5.91-.85 1.58-.85 1.18 0 2.02.92 2.02 2.13v4.74z'},
      { href: '#', color: 'blue-400', iconPath: 'M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.46 1a9.9 9.9 0 0 1-3.14 1.19A4.47 4.47 0 0 0 16.5 4a4.45 4.45 0 0 0-4.45 4.45c0 .35.04.7.11 1.03A12.7 12.7 0 0 1 1.64 3.15a4.46 4.46 0 0 0-.6 2.24c0 1.55.79 2.92 1.98 3.72a4.44 4.44 0 0 1-2-.55v.06c0 2.17 1.55 4 3.61 4.41a4.47 4.47 0 0 1-2.03.08c.57 1.78 2.24 3.08 4.21 3.12a8.94 8.94 0 0 1-5.55 1.91c-.36 0-.72-.02-1.08-.07a12.7 12.7 0 0 0 6.87 2.01c8.24 0 12.76-6.84 12.76-12.77l-.01-.58a9.42 9.42 0 0 0 2.33-2.39z'},
      { href: '#', color: 'blue-500', iconPath: 'M18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3zM15 12h-2v7h-3v-7H9v-3h1V8c0-2.25 1.5-3 2.5-3h2.5v3h-2v2h3l-1 3z'}
    ]},
    { name: 'Joseph Munyambu', role: 'Nursing Assistant', img: '/LL2.png', socialLinks: [
      { href: '#', color: 'blue-600', iconPath: 'M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 12h3v-7H7v7zm1.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8.5 8.5h-3v-4.5c0-.38-.03-.75-.14-1.04-.12-.3-.35-.56-.64-.78-.3-.22-.64-.35-1-.35-.85 0-1.4.48-1.4 1.26v5.22h-3v-7h3v.98h.04c.3-.5.91-.85 1.58-.85 1.18 0 2.02.92 2.02 2.13v4.74z'},
      { href: '#', color: 'blue-400', iconPath: 'M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.46 1a9.9 9.9 0 0 1-3.14 1.19A4.47 4.47 0 0 0 16.5 4a4.45 4.45 0 0 0-4.45 4.45c0 .35.04.7.11 1.03A12.7 12.7 0 0 1 1.64 3.15a4.46 4.46 0 0 0-.6 2.24c0 1.55.79 2.92 1.98 3.72a4.44 4.44 0 0 1-2-.55v.06c0 2.17 1.55 4 3.61 4.41a4.47 4.47 0 0 1-2.03.08c.57 1.78 2.24 3.08 4.21 3.12a8.94 8.94 0 0 1-5.55 1.91c-.36 0-.72-.02-1.08-.07a12.7 12.7 0 0 0 6.87 2.01c8.24 0 12.76-6.84 12.76-12.77l-.01-.58a9.42 9.42 0 0 0 2.33-2.39z'},
      { href: '#', color: 'blue-500', iconPath: 'M18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3zM15 12h-2v7h-3v-7H9v-3h1V8c0-2.25 1.5-3 2.5-3h2.5v3h-2v2h3l-1 3z'}
    ]},
    { name: 'Joseph Ngumbau', role: 'Medical Assistant', img: '/LL3.png', socialLinks: [
        { href: '#', color: 'blue-600', iconPath: 'M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 12h3v-7H7v7zm1.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8.5 8.5h-3v-4.5c0-.38-.03-.75-.14-1.04-.12-.3-.35-.56-.64-.78-.3-.22-.64-.35-1-.35-.85 0-1.4.48-1.4 1.26v5.22h-3v-7h3v.98h.04c.3-.5.91-.85 1.58-.85 1.18 0 2.02.92 2.02 2.13v4.74z'},
        { href: '#', color: 'blue-400', iconPath: 'M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.46 1a9.9 9.9 0 0 1-3.14 1.19A4.47 4.47 0 0 0 16.5 4a4.45 4.45 0 0 0-4.45 4.45c0 .35.04.7.11 1.03A12.7 12.7 0 0 1 1.64 3.15a4.46 4.46 0 0 0-.6 2.24c0 1.55.79 2.92 1.98 3.72a4.44 4.44 0 0 1-2-.55v.06c0 2.17 1.55 4 3.61 4.41a4.47 4.47 0 0 1-2.03.08c.57 1.78 2.24 3.08 4.21 3.12a8.94 8.94 0 0 1-5.55 1.91c-.36 0-.72-.02-1.08-.07a12.7 12.7 0 0 0 6.87 2.01c8.24 0 12.76-6.84 12.76-12.77l-.01-.58a9.42 9.42 0 0 0 2.33-2.39z'},
        { href: '#', color: 'blue-500', iconPath: 'M18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3zM15 12h-2v7h-3v-7H9v-3h1V8c0-2.25 1.5-3 2.5-3h2.5v3h-2v2h3l-1 3z'}
      ]},
      { name: 'Erick Kipkemboi', role: 'Web Designer', img: '/LL4.png', socialLinks: [
        { href: '#', color: 'blue-600', iconPath: 'M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 12h3v-7H7v7zm1.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8.5 8.5h-3v-4.5c0-.38-.03-.75-.14-1.04-.12-.3-.35-.56-.64-.78-.3-.22-.64-.35-1-.35-.85 0-1.4.48-1.4 1.26v5.22h-3v-7h3v.98h.04c.3-.5.91-.85 1.58-.85 1.18 0 2.02.92 2.02 2.13v4.74z'},
        { href: '#', color: 'blue-400', iconPath: 'M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.46 1a9.9 9.9 0 0 1-3.14 1.19A4.47 4.47 0 0 0 16.5 4a4.45 4.45 0 0 0-4.45 4.45c0 .35.04.7.11 1.03A12.7 12.7 0 0 1 1.64 3.15a4.46 4.46 0 0 0-.6 2.24c0 1.55.79 2.92 1.98 3.72a4.44 4.44 0 0 1-2-.55v.06c0 2.17 1.55 4 3.61 4.41a4.47 4.47 0 0 1-2.03.08c.57 1.78 2.24 3.08 4.21 3.12a8.94 8.94 0 0 1-5.55 1.91c-.36 0-.72-.02-1.08-.07a12.7 12.7 0 0 0 6.87 2.01c8.24 0 12.76-6.84 12.76-12.77l-.01-.58a9.42 9.42 0 0 0 2.33-2.39z'},
        { href: '#', color: 'blue-500', iconPath: 'M18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3zM15 12h-2v7h-3v-7H9v-3h1V8c0-2.25 1.5-3 2.5-3h2.5v3h-2v2h3l-1 3z'}
      ]},
      { name: 'Stephen Kerubo', role: 'President of Sales', img: '/LL5.png', socialLinks: [
        { href: '#', color: 'blue-600', iconPath: 'M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 12h3v-7H7v7zm1.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8.5 8.5h-3v-4.5c0-.38-.03-.75-.14-1.04-.12-.3-.35-.56-.64-.78-.3-.22-.64-.35-1-.35-.85 0-1.4.48-1.4 1.26v5.22h-3v-7h3v.98h.04c.3-.5.91-.85 1.58-.85 1.18 0 2.02.92 2.02 2.13v4.74z'},
        { href: '#', color: 'blue-400', iconPath: 'M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.46 1a9.9 9.9 0 0 1-3.14 1.19A4.47 4.47 0 0 0 16.5 4a4.45 4.45 0 0 0-4.45 4.45c0 .35.04.7.11 1.03A12.7 12.7 0 0 1 1.64 3.15a4.46 4.46 0 0 0-.6 2.24c0 1.55.79 2.92 1.98 3.72a4.44 4.44 0 0 1-2-.55v.06c0 2.17 1.55 4 3.61 4.41a4.47 4.47 0 0 1-2.03.08c.57 1.78 2.24 3.08 4.21 3.12a8.94 8.94 0 0 1-5.55 1.91c-.36 0-.72-.02-1.08-.07a12.7 12.7 0 0 0 6.87 2.01c8.24 0 12.76-6.84 12.76-12.77l-.01-.58a9.42 9.42 0 0 0 2.33-2.39z'},
        { href: '#', color: 'blue-500', iconPath: 'M18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3zM15 12h-2v7h-3v-7H9v-3h1V8c0-2.25 1.5-3 2.5-3h2.5v3h-2v2h3l-1 3z'}
      ]},
      { name: 'John Leboo', role: 'Dog Trainer', img: '/LL6.png', socialLinks: [
        { href: '#', color: 'blue-600', iconPath: 'M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 12h3v-7H7v7zm1.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8.5 8.5h-3v-4.5c0-.38-.03-.75-.14-1.04-.12-.3-.35-.56-.64-.78-.3-.22-.64-.35-1-.35-.85 0-1.4.48-1.4 1.26v5.22h-3v-7h3v.98h.04c.3-.5.91-.85 1.58-.85 1.18 0 2.02.92 2.02 2.13v4.74z'},
        { href: '#', color: 'blue-400', iconPath: 'M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.46 1a9.9 9.9 0 0 1-3.14 1.19A4.47 4.47 0 0 0 16.5 4a4.45 4.45 0 0 0-4.45 4.45c0 .35.04.7.11 1.03A12.7 12.7 0 0 1 1.64 3.15a4.46 4.46 0 0 0-.6 2.24c0 1.55.79 2.92 1.98 3.72a4.44 4.44 0 0 1-2-.55v.06c0 2.17 1.55 4 3.61 4.41a4.47 4.47 0 0 1-2.03.08c.57 1.78 2.24 3.08 4.21 3.12a8.94 8.94 0 0 1-5.55 1.91c-.36 0-.72-.02-1.08-.07a12.7 12.7 0 0 0 6.87 2.01c8.24 0 12.76-6.84 12.76-12.77l-.01-.58a9.42 9.42 0 0 0 2.33-2.39z'},
        { href: '#', color: 'blue-500', iconPath: 'M18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3zM15 12h-2v7h-3v-7H9v-3h1V8c0-2.25 1.5-3 2.5-3h2.5v3h-2v2h3l-1 3z'}
      ]}  
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-20">
        <div className="text-center">
            <h1 className="text-5xl font-semibold text-gray-800 dark:text-white"> Our Team</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-none mb-4"/>
              <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <SocialIcons links={member.socialLinks}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default OurTeam;
