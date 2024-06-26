import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Top = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around p-3.5 bg-black text-white overflow-hidden">
      <div className="mb-4 md:mb-0">
        <a href="http://localhost:3000/contactus">
          <h2 className="hover:text-orange-500 text-center md:text-left">
            Book Your FREE Consultation Now!
          </h2>
        </a>
      </div>
      <div className="mb-4 md:mb-0">
        <h2 className="text-center md:text-left">
          <a href="tel:91 9582-930-940" className="hover:text-orange-500">
            CALL NOW! <span>+91 9582-930-940</span>
          </a>
        </h2>
      </div>
      <div className="flex justify-center md:justify-start flex-wrap gap-4 text-2xl">
        <a
          href="https://www.instagram.com/jsr_pvt_ltd/?igsh=MTU1cDdwbGVpeHp6cg%3D%3D"
          target="_blank"
          className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61558692683271"
          target="_blank"
          className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
        >
          <FaFacebook />
        </a>
        <a
          href="https://in.pinterest.com/jsr23031991/"
          target="_blank"
          className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
        >
          <FaPinterest />
        </a>
        <a
          href="https://x.com/Jsr23031991"
          target="_blank"
          className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.youtube.com/@Jsr_Pvt_Ltd"
          target="_blank"
          className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Top;
