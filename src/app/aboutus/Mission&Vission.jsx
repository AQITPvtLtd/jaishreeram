import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="px-4 py-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

        {/* Left Section - Image & Title */}
        <div className="bg-orange-600 text-white font-bold text-2xl p-6 text-center flex flex-col items-center justify-center shadow-lg rounded">
          <h2 className="mb-4">Our Mission And Vision</h2>
          <Image
            src="/about/missionandvision.png"
            alt="Mission and Vision"
            width={300}
            height={200}
            className="rounded"
          />
        </div>

        {/* Mission Box */}
        <div className="flex flex-col justify-between border rounded-lg shadow-lg h-full">
          <div className="bg-orange-600 text-white font-semibold text-center py-2 rounded-t">
            Our Mission
          </div>
          <div className="p-4 text-justify text-gray-700 text-sm md:text-base flex-grow" style={{ fontFamily: "Inter, sans-serif" }}>
            Our mission at JSR PVT LTD is to provide high quality services in the areas of Stock market updates, Health And Life Insurance, JSR Associates, Financial Services, Legal Advice, Company Registration, and Real Estate Matters. We guide our clients every step of the way with innovative systems, personalized solutions, and expert advice. Leveraging our deep industry expertise and commitment to excellence, we aim to build lasting relationships based on trust and success.
          </div>
        </div>

        {/* Vision Box */}
        <div className="flex flex-col justify-between border rounded-lg shadow-lg h-full">
          <div className="bg-orange-600 text-white font-semibold text-center py-2 rounded-t">
            Our Vision
          </div>
          <div className="p-4 text-justify text-gray-700 text-sm md:text-base flex-grow" style={{ fontFamily: "Inter, sans-serif" }}>
            Our goal at JSR PVT LTD is to help people and businesses succeed by providing great insight into the stock market, high quality health insurance, expert legal advice and high quality listed properties. We want to be a trusted and innovative partner in these areas, driving our clients’ growth and success. Focusing on excellence, personalized service and understanding our clients’ needs, we aim to grow their business and personal careers, ensuring they thrive in an ever-changing market.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
