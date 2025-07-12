"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const data = [
  { id: 1, title: "Home", newTab: false, path: "/" },
  { id: 2, title: "About Us", newTab: false, path: "/aboutus" },
  { id: 3, title: "Services", newTab: false, path: "/services" },
  // { id: 4, title: "Why Choose Us", newTab: false, path: "/whychooseus" },
  { id: 4, title: "Blogs", newTab: false, path: "/blogs" },
  { id: 5, title: "Contact Us", newTab: false, path: "/contactus" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const UnderlineAnimation = ({ isActive }) => (
    <div
      className={`transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0"
        } bottom-0 left-0 h-1 bg-orange-400`}
    />
  );

  return (
    <nav className="bg-white shadow-md z-50 w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-between h-[90px]">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo/logo.png"
            width={140}
            height={90}
            alt="Logo"
            className="h-[90px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {data.map((d) => (
            <Link key={d.id} href={d.path} passHref>
              <div
                onClick={handleLinkClick}
                className="group text-black text-lg font-semibold cursor-pointer transition duration-300 ease-in-out transform hover:scale-125"
                target={d.newTab ? "_blank" : "_self"}
                rel={d.newTab ? "noopener noreferrer" : ""}
              >
                <span
                  className="inline-block hover:text-orange-400 px-2"
                  style={{ fontFamily: "Roboto Slab, serif" }}
                >
                  {d.title}
                </span>
                <UnderlineAnimation isActive={false} />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
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

      {/* Mobile Menu List */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-4 mt-2">
            {data.map((d) => (
              <Link key={d.id} href={d.path} passHref>
                <div
                  onClick={handleLinkClick}
                  className="text-black text-lg font-semibold cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
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
