import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <footer className="text-gray-800 py-8 md:py-10 lg:py-12 mt-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-start-2 md:col-span-3 flex flex-col items-center md:items-start">
            <Image
              src={"/logo/jsrlogo1.png"}
              width={125}
              height={125}
              alt="JSR Logo"
            />
            <p className="mt-4 text-center md:text-left">
              JSR Pvt Ltd is your trusted partner across various sectors
              including insurance, residential, and legal services.
            </p>
            <Link href={"tel:9582-930-940"} target="_blank">
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                CALL +91 9582-930-940
              </button>
            </Link>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h1 className="text-lg font-bold mb-4">Information</h1>
            <ul>
              <li className="mb-2 transition duration-300 ease-in-out hover:text-orange-500">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out hover:text-orange-500">
                <Link href="/aboutus">About Us</Link>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out hover:text-orange-500">
                <Link href="/services">Services</Link>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out hover:text-orange-500">
                <Link href="/whychooseus">Why Choose Us</Link>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out hover:text-orange-500">
                <Link href="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h1 className="text-lg md:text-xl font-bold mb-4">Get In Touch</h1>
            <div className="mb-4">
              <Link
                href="mailto:info@jsrpvtltd.com"
                target="_blank"
                className="transition duration-300 ease-in-out hover:text-orange-500 flex items-center"
              >
                <MdOutlineEmail className="bg-black rounded-full text-white p-1.5 text-3xl md:text-4xl hover:text-orange-500" />
                <p className="ml-2 text-base md:text-lg">info@jsrpvtltd.com</p>
              </Link>
            </div>

            <div className="mb-4">
              <Link
                href="tel:+91 9582-930-940"
                target="_blank"
                className="transition duration-300 ease-in-out hover:text-orange-500 flex items-center"
              >
                <FaPhone className="bg-black rounded-full text-white p-1.5 text-3xl md:text-4xl hover:text-orange-500" />
                <p className="ml-2 text-base md:text-lg">+91 9582-930-940</p>
              </Link>
            </div>

            <div className="mb-4">
              <Link
                href="https://maps.app.goo.gl/m9QsWKnZU1Ka7eFV6"
                target="_blank"
                className="hover:text-orange-500 flex items-start"
              >
                <MdLocationPin className="bg-black rounded-full text-white p-1.5 text-3xl md:text-4xl hover:text-orange-500" />
                <p className="ml-2 text-base md:text-lg">
                  G-36 First Floor, Connaught Cir, Block G, <br /> Connaught
                  Place, New Delhi, Delhi 110001
                </p>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-3xl md:text-3xl mt-4">
              <Link
                href="https://www.instagram.com/jsr_pvt_ltd/?igsh=MTU1cDdwbGVpeHp6cg%3D%3D"
                target="_blank"
                className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61558692683271"
                target="_blank"
                className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://in.pinterest.com/jsr23031991/"
                target="_blank"
                className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
              >
                <FaPinterest />
              </Link>
              <Link
                href="https://x.com/Jsr23031991"
                target="_blank"
                className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
              >
                <FaSquareXTwitter />
              </Link>
              <Link
                href="https://www.youtube.com/@Jsr_Pvt_Ltd"
                target="_blank"
                className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center font-semibold p-3">
        <Link href={"https://tekbooster.com"} target="_blank">
          Design & Developed By Tek Booster (Digital Marketing Company)
        </Link>
      </p>
    </div>
  );
};

export default Footer;
