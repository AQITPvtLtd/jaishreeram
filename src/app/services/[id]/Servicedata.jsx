import React from "react";
import { data } from "../../../components/homepage/services/information";
import Image from "next/image";

const Servicedata = ({ id }) => {
  const obj = data.find((item) => item.id == id);

  if (!obj) {
    return <div>Service data not found.</div>;
  }

  return (
    <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-orange-700 overflow-hidden">
      <div key={obj.id} className="grid lg:grid-cols-3 gap-4 items-center">
        <div className="relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105">
          {obj.image && (
            <Image
              src={`${obj.image}`}
              alt={obj.name}
              width={1000}
              height={1000}
              className="rounded-lg"
            />
          )}
        </div>
  
        <div className="lg:col-span-2 flex flex-col justify-center bg-white p-6 rounded-lg shadow-inner   overflow-hidden">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{obj.title}</h1>
          <p className="text-gray-700 text-lg">{obj.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Servicedata;
