"use client";

import { getServiceData } from '@/services/servicesdata';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute z-10 left-[-15px] top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white text-gray-700 p-2 rounded-full shadow-md cursor-pointer transition-all"
  >
    <FaChevronLeft size={16} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute z-10 right-[-15px] top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white text-gray-700 p-2 rounded-full shadow-md cursor-pointer transition-all"
  >
    <FaChevronRight size={16} />
  </div>
);

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    async function getResult() {
      try {
        const result = await getServiceData();
        if (result && result.result) {
          setService(result.result);
        } else {
          console.log("Invalid API Response", result);
        }
      } catch (error) {
        console.error("Error fetching Services:", error.message);
      }
    }
    getResult();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative px-4 md:px-8 lg:px-16 py-10">
      <div className="text-center mb-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-800"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Our Services
        </h1>
      </div>

      <Slider {...settings} className="relative">
        {service.map((b) => (
          <div key={b.title} className="px-2">
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 h-full">
              <Link href={`/services/${b.path}`}>
                <Image
                  src={`/services/${b.image}`}
                  width={500}
                  height={300}
                  className="w-full h-[220px] object-cover"
                  alt={b.title}
                />
              </Link>

              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h2
                    className="text-xl font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                  >
                    {b.title}
                  </h2>
                  <div
                    className="text-gray-700 text-sm line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: b.content }}
                  />
                </div>

                <div className="mt-4">
                  <Link href={`/services/${b.path}`}>
                    <span className="w-full inline-block text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-base rounded-lg transition-all border-2 border-transparent hover:text-black">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
