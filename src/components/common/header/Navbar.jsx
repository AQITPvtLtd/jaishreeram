"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const data = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/aboutus"
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    path: "/"
  },
  {
    id: 4,
    title: "Why Choose Us",
    newTab: false,
    path: "/"
  },
  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/contactus"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Image src="/logo/jsrLogo.webp" width={80} height={90} alt="Logo" />
        </div>
        <div className="hidden md:flex space-x-8">
          {data.map((d) => (
            <Link key={d.id} href={d.path}>
              <div
                className="text-black hover:text-white text-lg hover:underline"
                target={d.newTab ? "_blank" : "_self"}
                rel={d.newTab ? "noopener noreferrer" : ""}
              >
                {d.title}
              </div>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            {data.map((d) => (
              <Link key={d.id} href={d.path}>
                <div
                  className="text-black hover:text-white-700 hover:underline"
                  target={d.newTab ? "_blank" : "_self"}
                  rel={d.newTab ? "noopener noreferrer" : ""}
                >
                  {d.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
