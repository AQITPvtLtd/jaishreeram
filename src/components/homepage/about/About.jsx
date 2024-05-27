import React from "react";
import Image from "next/image";
import 'animate.css';
const About = () => {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">About</h1>
          <h2 className="text-lg text-gray-600 mb-8">JSR PRIVATE LIMITED</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-400">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="slide-container">
              <Image src="/about/Bussness.png" width={500} height={350} alt="Business" className="object-cover animate__slideInLeft animate__repeat-2" />
            </div>
          </div>

          {/* Text Section */}
          <div className="px-4 lg:px-0 text-white bg-orange-500 p-7">
            <p className="text-lg lg:text-xl leading-relaxed animate__slideInRight animate__repeat-2 p-5">
              JSR Pvt Ltd is your trusted partner across various sectors including insurance, residential, and legal services. Whether it’s safeguarding your assets with our insurance solutions, finding your dream home, or obtaining top-notch legal advice and representation, we’ve got you covered. With our commitment to excellence and customer satisfaction, JSR Pvt Ltd is dedicated to providing comprehensive services tailored to meet your specific needs in the insurance, residential, and legal sectors.
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;
