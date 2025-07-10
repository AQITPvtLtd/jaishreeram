import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "./information";
const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-12" style={{ fontFamily: "Roboto Slab, serif" }}>Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((d) => (
          <div
            key={d.id}
            className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col"
            style={{ height: "100%" }}
          >
            <div className="w-full h-64 mb-4">
              {/* Ensuring images are the same size */}
              <Image
                src={`${d.image}`}
                alt={d.title}
                className="rounded object-cover w-full h-full"
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-center" style={{ fontFamily: "Roboto Slab, serif" }}>
              {d.title}
            </h2>
            <p className="text-base mb-4 px-1 text-center line-clamp-3">
              {d.description}
            </p>
            <div className="px-5 pb-2">
              <Link href={`/services/${d.path}`}>
                <div className="block bg-primary py-3 rounded-md shadow-lg text-center bg-orange-500 text-white hover:bg-orange-600 transition duration-300 ease-in-out"
                  style={{ fontFamily: "Roboto Slab, serif" }}
                >
                  {d.btn}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
