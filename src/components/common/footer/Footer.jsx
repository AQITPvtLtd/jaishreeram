import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 md:p-10 lg:py-12 mt-5">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-start-2 md:col-span-3 flex flex-col items-center md:items-start">
          <Image src={"/logo/jsrLogo.webp"} width={100} height={100} />
          <p className="mt-4 text-center md:text-left">
            We are very proud to be serving our local area for over 35 years!
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            CALL 929-242-6868
          </button>
        </div>

        <div className="col-span-6 md:col-span-4">
          <h1 className="text-lg font-bold mb-4">Information</h1>
          <ul>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/">About Us</Link>
            </li>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/">Services</Link>
            </li>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/">Why Choose Us</Link>
            </li>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-4">
          <h1 className="text-lg font-bold mb-4">Get In Touch</h1>
          <div className="mb-4">
            <Link href="/" className="transition duration-300 ease-in-out hover:text-blue-600">info@jsrpvtltd.com</Link>
          </div>
          <div className="mb-4">
            <Link href="/" className="transition duration-300 ease-in-out hover:text-blue-600">+91 9582-930-940</Link>
          </div>
          <div>
            <Link href="/" className="transition duration-300 ease-in-out hover:text-blue-600">
              G-36 First Floor, Connaught Cir, Block G, Connaught Place, New
              Delhi, Delhi 110001
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
