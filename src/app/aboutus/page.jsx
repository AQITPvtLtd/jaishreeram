import React from "react";
import Image from "next/image";
import "animate.css";
import Mission from "./Mission&Vission";

const About = () => {
  return (
    <div>
      <div className="w-full h-[500px] overflow-hidden relative">
        <Image
          src={"/about/busnessimg.png"}
          layout="fill"
          objectFit="cover"
          alt="Business"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl sm:text-9xl font-bold relative">
            <span className="text-stroke-1 text-orange-500 absolute inset-0">
              JSR
            </span>
            JSR
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">About</h1>
          <h2 className="text-lg text-gray-600 mb-8">JSR PRIVATE LIMITED</h2>
        </div>

        {/* Text Section */}
        <div className="px-4 lg:px-0">
          <p className="text-lg lg:text-xl leading-relaxed text-center animate__fadeInUp">
            JSR Pvt Ltd is your trusted partner across various sectors including
            insurance, residential, and legal services. Whether it’s
            safeguarding your assets with our insurance solutions, finding your
            dream home, or obtaining top-notch legal advice and representation,
            we’ve got you covered. With our commitment to excellence and
            customer satisfaction, JSR Pvt Ltd is dedicated to providing
            comprehensive services tailored to meet your specific needs in the
            insurance, residential, and legal sectors.
          </p>
        </div>
      </div>

      <Mission />
    </div>
  );
};

export default About;
