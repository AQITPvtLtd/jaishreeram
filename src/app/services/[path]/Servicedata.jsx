import React from "react";
import { data } from "../../../components/homepage/services/information";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
const Servicedata = ({ path }) => {
  const obj = data.find((item) => item.path == path);
  if (!obj) {
    return <div>Service data not found.</div>;
  }

  return (
    <div>
      <div className="overflow-x-hidden">
        <div className="lg:grid grid-cols-4">
          <div className="col-span-3 p-4 ">
            <h1 className="lg:text-4xl text-3xl py-6 font-bold text-center text-primary" style={{ fontFamily: "Roboto Slab, serif" }}>
              {obj.title}
            </h1>
            <div>
              <Image
                src={`${obj.image}`}
                width={500}
                height={500}
                className="w-full rounded-md"
                alt={obj.title}
              />

              <div className="mt-7 pb-7 mx-24 bg-gray-200 px-10 pt-3 rounded-lg text-justify">
                <div className="text-2xl text-center mt-4 mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
                  {obj.title}
                </div>
                <div className="border border-blue-800 mx-10 mb-4"></div>
                <p className="text-gray-700 text-lg" style={{ fontFamily: "Inter, sans-serif" }}
                >{obj.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="p-3 border m-4 rounded-md mt-16 h-fit">
            <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: "Roboto Slab, serif" }}>Our Services</h1>
            <ul>
              {data.map((item) => (
                <li key={item.path} className="flex items-start">
                  <FaArrowCircleRight className="mt-1.5 mr-2 text-primary" />
                  <Link href={`/services/${item.path}`} className="text-black" style={{ fontFamily: "Roboto Slab, serif" }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicedata;
