"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollTrigger from "react-scroll-trigger";

const Slider = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/slider/slide.jpg"
          alt="Slider Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Overlay and Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 px-4">
        <ScrollTrigger
          onEnter={() => setAnimate(true)}
          onExit={() => setAnimate(false)}
        >
          <div
            className={`${animate &&
              "animate__zoomIn animate__slower animate__animated"
              }`}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold p-2"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              JSR PVT LTD
            </h1>

            <h3
              className="font-semibold text-base sm:text-lg md:text-xl py-3 max-w-md sm:max-w-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Your Trusted Partner For Digital Marketing, Share Market Updates,
              Stock Market Courses, Health Insurance, Legal Expertise, And
              Property Listings.
            </h3>
          </div>
        </ScrollTrigger>

        <Link href="/contactus">
          <button
            className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 text-sm sm:text-base rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
