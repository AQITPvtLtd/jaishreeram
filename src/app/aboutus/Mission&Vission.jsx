import React from "react";
import Image from "next/image";
const Mission = () => {
  return (
    <div className="px-5">
      <div
        className="relative w-full h-full overflow-hidden bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: "url(/about/Bg-about.jpg)" }}
      >
        <div className="lg:grid lg:grid-cols-12 relative items-center justify-center w-full h-full p-8 text-center bg-black bg-opacity-50">
          <div className="col-start-2 col-span-4 flex justify-center lg:justify-start">
            <div className="mb-8 lg:mb-0 lg:mr-8 flex-shrink-0">
              <Image
                src="/about/mission.png"
                width={300}
                height={300}
                alt="Mission Image"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="col-span-6">
            <h1 className="text-center text-orange-400 font-semibold text-3xl py-3">
              Our Mission
            </h1>
            <h2 className="text-white text-lg md:text-xl max-w-prose">
              Our mission at JSR PVT LTD is to provide high quality services in
              the areas of Stock market updates, Health And Life Insurance, JSR
              Associates, Financial Services, Legal Advice, Company
              Registration, and Real Estate Matters. We guide our clients every
              step of the way with innovative systems, personalized solutions,
              and expert advice. Leveraging our deep industry expertise and
              commitment to excellence, we aim to build lasting relationships
              based on trust and success.
            </h2>
          </div>
        </div>
      </div>

      <div
        className="relative w-full h-full overflow-hidden bg-cover bg-center mt-8 rounded-2xl"
        style={{ backgroundImage: "url(/about/Bg-about.jpg)" }}
      >
        <div className="lg:grid lg:grid-cols-12 relative items-center justify-center w-full h-full p-8 text-center bg-black bg-opacity-50 flex flex-col-reverse">
          <div className="col-span-12 lg:col-span-8 mb-8 lg:mb-0">
            <h1 className="text-center text-orange-400 font-semibold text-3xl py-3">
              Our Vision
            </h1>
            <h2 className="text-white text-lg md:text-xl max-w-prose">
              Our goal at JSR PVT LTD is to help people and businesses succeed
              by providing great insight into the stock market, high quality
              health insurance, expert legal advice and high quality listed
              properties. We want to be a trusted and innovative partner in
              these areas, driving our clients’ growth and success. Focusing on
              excellence, personalized service and understanding our clients’
              needs, we aim to grow their business and personal careers,
              ensuring they thrive in an ever-changing market.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end px-20">
            <div className="flex-shrink-0">
              <Image
                src="/about/vision.png"
                width={300}
                height={300}
                alt="Mission Image"
                className="rounded-lg py-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
