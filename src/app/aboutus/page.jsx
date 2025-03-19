import React from "react";
import Image from "next/image";
import "animate.css";
import Mission from "./Mission&Vission";

const About = () => {
  return (
    <div className="mt-[200px] px-5">
      <div className="pb-8">
        <div
          className="relative w-full h-full overflow-hidden bg-cover bg-center mt-8 rounded-2xl"
          style={{ backgroundImage: "url(/about/aboutbg.png)" }}
        >
          <div className=" relative items-center justify-center w-full h-full p-8 text-center bg-black bg-opacity-50 flex flex-col-reverse">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-center text-orange-400 font-semibold text-3xl">
                About us
              </h1>
              <h1 className="text-center text-orange-400 font-semibold text-3xl py-3">
                JSR Private Limited
              </h1>
              <h2 className="text-white text-lg md:text-xl lg:text-2xl max-w-prose">
                JSR Pvt Ltd is your trusted partner across various sectors
                including insurance, residential, and legal services. Whether
                it’s safeguarding your assets with our insurance solutions,
                finding your dream home, or obtaining top-notch legal advice and
                representation, we’ve got you covered. With our commitment to
                excellence and customer satisfaction, JSR Pvt Ltd is dedicated
                to providing comprehensive services tailored to meet your
                specific needs in the insurance, residential, and legal sectors.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Mission />
    </div>
  );
};

export default About;
