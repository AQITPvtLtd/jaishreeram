"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollTrigger from "react-scroll-trigger";
const Slider = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <div className="absolute inset-0">
        <Image
          src="/slider/slide.jpg"
          alt="Slider Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 mt-36">
        <ScrollTrigger
          onEnter={() => setAnimate(true)}
          onExit={() => setAnimate(false)}
        >
          <div  className={`${
                animate && "animate__zoomIn animate__slower animate__animated"
              }`}>
            <h1
              className={"lg:text-7xl md:text-5xl sm:text-5xl font-semibold p-4"}
            >
              JSR PVT LTD
            </h1>
            <h3 className="font-semibold text-2xl py-3 max-w-lg">
              Your Trusted Partner For Share Market Updates, Stock Market
              Courses, Health Insurance, Legal Expertise, And Properties
              listings.
            </h3>
          </div>
        </ScrollTrigger>

        <Link href="/contactus">
          <button className="bg-orange-500 text-white font-bold py-2 px-4 text-3xl rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
