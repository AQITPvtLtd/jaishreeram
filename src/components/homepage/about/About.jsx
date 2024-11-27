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
          <h1 className="text-4xl text-orange-400 lg:text-5xl font-semibold">
            About
          </h1>
          <h2 className="text-lg text-orange-400 mb-4 pt-2">
            JSR PRIVATE LIMITED
          </h2>

          <p className="text-lg lg:text-xl text-white leading-relaxed animate__slideInRight animate__repeat-2 p-2">
            JSR Pvt Ltd is your trusted partner across various sectors including
            insurance, residential, and legal services. Whether it’s
            safeguarding your assets with our insurance solutions, finding your
            dream home, or obtaining top-notch legal advice and representation,
            we’ve got you covered. With our commitment to excellence and
            customer satisfaction, JSR Pvt Ltd is dedicated to providing
            comprehensive services tailored to meet your specific needs in the
            insurance, residential, and legal sectors.
          </p>
          <div className="mt-4">
            <Link
              href={"/aboutus"}
              className="px-6 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition duration-300"
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
