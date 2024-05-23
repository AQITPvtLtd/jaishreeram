import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    image: "/services/doc_service.jpg",
    title: "Health and Life Insurance",
    description:
      "JSR Pvt Ltd offers dependable and honest insurance solutions for individuals and businesses. Our goal is to ensure customer happiness and peace...",
    btn: "Read More",
  },
  {
    id: 2,
    image: "/services/property_ser.jpg",
    title: "JSR Associates",
    description:
      "JSR Pvt Ltd provides comprehensive legal services through JSR Associates. Our experienced team offers legal advice and representation...",
    btn: "Read More",
  },
  {
    id: 3,
    image: "/services/share_services.jpg",
    title: "Share Market",
    description:
      "JSR Pvt Ltd offers investment advisory and portfolio management services in the share market. Our expert team provides strategic insights...",
    btn: "Read More",
  },
  {
    id: 4,
    image: "/services/law_services.jpg",
    title: "Law firm and Legal Services",
    description:
      "JSR Pvt Ltd offers legal services through our affiliated law firm. From legal consultation to representation in court, our team of experienced...",
    btn: "Read More",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((d) => (
          <div key={d.id} className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 text-center">
            <div className="relative w-full h-40 mx-auto mb-4">
              <Image
                src={d.image}
                layout="fill"
                alt={d.title}
                className="rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{d.title}</h2>
            <p className="text-lg mb-4">{d.description}</p>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
