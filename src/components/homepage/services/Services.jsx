import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "./information";
const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-semibold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((d) => (
          <div
            key={d.id}
            className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden p-6 transition-transform transform hover:scale-105 flex flex-col"
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
            <h2 className="text-2xl font-semibold mb-2 text-center">
              {d.title}
            </h2>
            <p className="text-lg mb-4 text-center line-clamp-3">
              {d.description}
            </p>
            <div className="mt-auto">
              <Link href={`/services/${d.id}`}>
                <div className="block bg-primary py-3 px-6 rounded-md shadow-lg text-center bg-orange-500 text-white hover:bg-orange-600 transition duration-300 ease-in-out">
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
