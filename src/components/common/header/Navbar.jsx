"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/aboutus",
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    path: "/services",
  },
  {
    id: 4,
    title: "Why Choose Us",
    newTab: false,
    path: "/whychooseus",
  },
  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/contactus",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Custom component for underline animation
  const UnderlineAnimation = ({ isActive }) => (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isActive ? "opacity-100" : "opacity-0"
      } absolute bottom-[-2px] left-0 right-0 h-[2px] bg-blue-500`}
    />
  );

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto grid grid-cols-12 items-center">
        <div className="col-start-1 col-span-2 md:col-start-3 md:col-span-2">
          <Image src="/logo/jsrLogo.webp" width={150} height={150} alt="Logo" />
        </div>

        <div className="col-span-8 hidden md:flex md:col-span-6 justify-center space-x-8">
          {data.map((d) => (
            <Link key={d.id} href={d.path}>
              <div
                className="relative group text-black text-lg font-semibold transition duration-300 hover:text-orange-400 hover:underline cursor-pointer"
                target={d.newTab ? "_blank" : "_self"}
                rel={d.newTab ? "noopener noreferrer" : ""}
              >
                {d.title}
                <UnderlineAnimation isActive={isOpen} />
              </div>
            </Link>
          ))}
        </div>

        <div className="col-start-11 col-span-2 md:hidden flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
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
                  className="text-black text-lg font-semibold transition duration-300 hover:text-white hover:underline cursor-pointer"
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
