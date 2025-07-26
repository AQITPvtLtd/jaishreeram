"use client";

import { getServiceData } from '@/services/servicesdata';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const jsrservice = () => {

  const [service, setService] = useState([]);

  useEffect(() => {
    async function getResult() {
      try {
        const result = await getServiceData();
        if (result && result.result) {
          setService(result.result);
        } else {
          console.log("Invalid API Respose", result);
        }
      } catch (error) {
        console.error("Error fetching Servies:", error.message);
      }
    }
    getResult();
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ fontFamily: "Roboto Slab, serif" }}>
          Our Services
        </h1>
      </div>

      <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {service.map((b) => (
          <div
            key={b.title}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          >
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

                <div className='mt-4'>
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
      </div>

    </div>

  )
}

export default jsrservice

