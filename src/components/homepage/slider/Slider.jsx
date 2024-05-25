import React from "react";
import Image from "next/image";
import Link from "next/link";
const Slider = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/slider/slide.jpg"
          alt="Slider Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-7xl font-semibold p-4">JSR PVT LTD</h1>
        <h3 className="font-semibold text-2xl py-3 max-w-lg">
          Your Trusted Partner For Share Market Updates, Stock Market Courses,
          Health Insurance, Legal Expertise, And Properties listings.
        </h3>
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
