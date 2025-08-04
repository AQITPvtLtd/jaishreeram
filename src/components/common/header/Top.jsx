import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const Top = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around p-3.5 bg-black text-white overflow-hidden">
      <div className="mb-4 md:mb-0">
        <Link href="/contactus">
          <h2 className="hover:text-orange-500 text-center md:text-left cursor-pointer">
            Book Your FREE Consultation Now!
          </h2>
        </Link>
      </div>
      <div className="mb-4 md:mb-0">
        <h2 className="text-center md:text-left">
          <a href="tel:+91 9990748899" className="hover:text-orange-500">
            CALL NOW! <span>+91 99907 48899</span>
          </a>
        </h2>
      </div>

      <div className="flex justify-center md:justify-start flex-wrap gap-4 text-2xl">
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
        <Link
          href="https://www.linkedin.com/company/jsr-pvt-ltd/"
          target="_blank"
          className="bg-black rounded-full text-white p-1.5 hover:text-orange-500"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default Top;
