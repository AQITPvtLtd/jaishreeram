import React from "react";
import { data } from "../information";
import Image from "next/image";

const Servicedata = ({ id }) => {
  const obj = data.find((item) => item.id == id);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div key={obj.id}>
        {/* Display the image if it exists */}
        <div className="lg:grid grid-cols-12 gap-4">
          <div className="lg:col-start-2 col-span-4 relative overflow-hidden rounded-md ">
            {obj.image && (
              <Image
                src={`${obj.image}`}
                alt={obj.name}
                width={350}
                height={350}
                className="rounded-md"
              />
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-2xl font-semibold py-1">{obj.title}</h1>
            <p className="text-gray-700 font-semibold mt-4">{obj.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicedata;