import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    image: "/services/doc_service.jpg",
    title: "Health and Life Insurance",
    description:
      "JSR Pvt Ltd is your trusted partner for health and life insurance, ensuring your well-being and financial safety...",
    btn: "Read More",
  },
  {
    id: 2,
    image: "/services/property_ser.jpg",
    title: "JSR Associates",
    description:
      "At JSR Associste, we're here to meet all your real estate needs. Our dedicated team is committed to providing exceptional...",
    btn: "Read More",
  },
  {
    id: 3,
    image: "/services/share_services.jpg",
    title: "Share Market",
    description:
      "JSR Share Market is your go-to place for investing in stocks, commodities, and securities. Whether you're new to investing...",
    btn: "Read More",
  },
  {
    id: 4,
    image: "/services/law_services.jpg",
    title: "Law firm and Legal Services",
    description:
      "JSR Law Firm and Legal Services is your trusted partner in navigating the complexities of the legal...",
    btn: "Read More",
  },
  {
    id: 5,
    image: "/services/Financ.jpg",
    title: "Financial Services",
    description:
      "JSR Financial Services is your trusted partner for all your financial needs. Whether you're planning for the future, managing...",
    btn: "Read More",
  },
  {
    id: 6,
    image: "/services/com-reg.jpg",
    title: "Company Registration",
    description:
      "JSR offers hassle-free and reliable services for company registration and trademark registration. We understand...",
    btn: "Read More",
  },
  {
    id: 7,
    image: "/services/Hospital-facility.jpg",
    title: "Hospital Facility",
    description:
      "JSR Hospital offers a comprehensive range of healthcare services designed to meet the diverse needs of patients...",
    btn: "Read More",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-semibold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">

        {data.map((d) => (
          <div key={d.id} className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden p-6 transition-transform transform hover:scale-105">
            <div className="relative w-full h-40 mb-4">
              <Image
                src={`${d.image}`}
                layout="fill"
                alt={d.title}
                className="rounded object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center">{d.title}</h2>
            <p className="text-lg mb-4 text-center">{d.description}</p>
            <Link href={`/services/${d.id}`}>
              <div className="block bg-primary py-3 px-6 rounded-md shadow-lg text-center bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out">{d.btn}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
