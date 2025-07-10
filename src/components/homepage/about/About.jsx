import React from "react";
import "animate.css";
import Link from "next/link";
const About = () => {
  return (
    <div
      className="relative w-full h-full overflow-hidden bg-cover bg-center mt-16"
      style={{ backgroundImage: "url(/about/aboutbg.png)" }}
    >
      <div className="lg:grid lg:grid-cols-12 relative items-center justify-center w-full h-full p-8 text-center bg-black bg-opacity-50">
        <div className="col-start-2 col-span-10">
          <h1 className="text-4xl text-orange-400 lg:text-5xl font-semibold" style={{ fontFamily: "Roboto Slab, serif" }}>
            About Us
          </h1>
          <h2 className="text-xl text-orange-400 mb-4 pt-2" style={{ fontFamily: "Roboto Slab, serif" }}>
            JSR PRIVATE LIMITED
          </h2>

          <p className="text-lg lg:text-xl text-white leading-relaxed animate__slideInRight animate__repeat-2 p-2">
            JSR Pvt. Ltd. is a multi-service company specializing in Digital Marketing, Health & Life Insurance, Financial Services, Share Market guidance, Company Registration, Legal Services, and Hospital Facility consultation. Backed by industry experts, we deliver reliable, result-driven solutions for individuals and businesses. At JSR, we combine innovation with experience to empower your digital, legal, and financial growth.
          </p>
          <div className="mt-4">
            <Link
              href={"/aboutus"}
              className="px-6 py-2 text-xl bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition duration-300"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
