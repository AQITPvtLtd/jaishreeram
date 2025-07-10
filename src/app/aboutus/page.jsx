import React from "react";
import Image from "next/image";
import "animate.css";
import Mission from "./Mission&Vission";

const About = () => {
  return (
    <div className="px-5">
      <div className="pb-8">
        <div
          className="relative w-full h-full overflow-hidden bg-cover bg-center mt-8 rounded-2xl"
          style={{ backgroundImage: "url(/about/aboutbg.png)" }}
        >
          <div className=" relative items-center justify-center w-full h-full p-8 text-center bg-black bg-opacity-50 flex flex-col-reverse">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-center text-orange-400 font-semibold text-3xl" style={{ fontFamily: "Roboto Slab, serif" }}>
                About us
              </h1>
              <h1 className="text-center text-orange-400 font-semibold text-3xl py-3" style={{ fontFamily: "Roboto Slab, serif" }}>
                JSR Private Limited
              </h1>
              <h2 className="text-white text-xl ">
                JSR Pvt. Ltd. is a multi-service company specializing in Digital Marketing, Health & Life Insurance, Financial Services, Share Market guidance, Company Registration, Legal Services, and Hospital Facility consultation. Backed by industry experts, we deliver reliable, result-driven solutions for individuals and businesses. At JSR, we combine innovation with experience to empower your digital, legal, and financial growth.
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
