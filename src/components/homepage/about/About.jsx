import React from "react";
import Image from "next/image";
import "animate.css";
const About = () => {
  return (
    <div
      className="relative w-full h-full overflow-hidden bg-cover bg-center mt-16"
      style={{ backgroundImage: "url(aboutbg.png)" }}
    >
      <div className="lg:grid lg:grid-cols-12 relative items-center justify-center w-full h-full p-8 text-center bg-black bg-opacity-50">

        <div className="col-start-2 col-span-10">
          <h1 className="text-4xl text-orange-400 lg:text-5xl font-semibold">
            About
          </h1>
          <h2 className="text-lg text-orange-400 mb-4 pt-2">JSR PRIVATE LIMITED</h2>

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
        </div>
      </div>
    </div>

    // <div className="container mx-auto px-4 lg:px-8 py-12">
    //   <div className="text-center">
    //     <h1 className="text-4xl lg:text-5xl font-semibold mb-4">About</h1>
    //     <h2 className="text-lg text-gray-600 mb-8">JSR PRIVATE LIMITED</h2>
    //   </div>

    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-400">
    //     {/* Image Section */}
    //     <div className="relative overflow-hidden rounded-lg">
    //       <div className="slide-container">
    //         <Image src="/about/Bussness.png" width={500} height={350} alt="Business" className="object-cover animate__slideInLeft animate__repeat-2" />
    //       </div>
    //     </div>

    //     {/* Text Section */}
    //     <div className="px-4 lg:px-0 text-white bg-orange-500 p-7">
    //
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
