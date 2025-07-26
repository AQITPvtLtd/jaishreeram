"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getServiceData } from "@/services/servicesdata";

const Servicedata = ({ path }) => {
  const [service, setService] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await getServiceData();
      setService(result.result || []);
    }
    getData();
  }, []);

  const serviceDetailed = service.find((b) => b.path === path);

  return (
    <div className="pt-10 lg:px-16 px-4 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-white rounded-xl shadow-md p-5 h-fit sticky top-24">
          <h2 className="text-xl font-bold mb-4 text-gray-800" style={{ fontFamily: "Roboto Slab, serif" }}>
            All Services
          </h2>
          <ul className="space-y-3">
            {service.map((item) => (
              <li key={item.path}>
                <Link
                  href={`/services/${item.path}`}
                  className={`block text-blue-600 hover:text-orange-500 transition font-medium ${item.path === path ? "text-orange-600 font-semibold" : ""
                    }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 w-full">
          {serviceDetailed ? (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1
                className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl"
                style={{ fontFamily: "Roboto Slab, serif" }}
              >
                {serviceDetailed.title}
              </h1>

              <div className="w-full overflow-hidden rounded mb-6">
                <Image
                  src={`/services/${serviceDetailed.image}`}
                  alt={serviceDetailed.title}
                  height={500}
                  width={1000}
                  className="w-full max-h-[500px] object-cover object-center"
                />
              </div>

              <div
                className="text-gray-800 text-base lg:text-justify"
                dangerouslySetInnerHTML={{ __html: serviceDetailed.content }}
              ></div>
            </div>
          ) : (
            <p className="text-red-600">Service not found.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Servicedata;
