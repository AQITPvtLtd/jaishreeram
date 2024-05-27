import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 md:p-10 lg:py-12 mt-5">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-start-2 md:col-span-3 flex flex-col items-center md:items-start">
          <Image src={"/logo/jsrLogo.webp"} width={100} height={100} />
          <p className="mt-4 text-center md:text-left">
            We are very proud to be serving our local area for over 35 years!
          </p>
          <Link href={"tel:929-242-6868"} target="__blank">
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            CALL 929-242-6868
          </button>
          </Link>
        </div>

        <div className="col-span-6 md:col-span-4">
          <h1 className="text-lg font-bold mb-4">Information</h1>
          <ul>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/services">Services</Link>
            </li>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/whychooseus">Why Choose Us</Link>
            </li>
            <li className="mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-4">
          <h1 className="text-lg font-bold mb-4">Get In Touch</h1>
          <div className="mb-4">
            <Link
              href="mailto:info@jsrpvtltd.com"
              target="__balnk"
              className="transition duration-300 ease-in-out hover:text-blue-600"
            >
              info@jsrpvtltd.com
            </Link>
          </div>


          <div className="mb-4">
            <Link
              href="tel:+91 9582-930-940"
              target="__blank"
              className="transition duration-300 ease-in-out hover:text-blue-600"
            >
              +91 9582-930-940
            </Link>
          </div>


          <div>
            <Link
              href="/"
              className="transition duration-300 ease-in-out hover:text-blue-600"
            >
              G-36 First Floor, Connaught Cir, Block G, Connaught Place, New
              Delhi, Delhi 110001
            </Link>
          </div>

          <div className="flex lg:gap-4 text-4xl mt-4">
            <Link href={"https://www.instagram.com/jsr_pvt_ltd/?igsh=MTU1cDdwbGVpeHp6cg%3D%3D"} target="_blank">
              <FaInstagram className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=61558692683271"} target="_blank">
              <FaFacebook className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
            </Link>

            {/* <Link href={"/"} target="_blank">
              <CiLinkedin className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
            </Link> */}
            <Link href={"https://in.pinterest.com/jsr23031991/"} target="_blank hover">
              <FaPinterest className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
