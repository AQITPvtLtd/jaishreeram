import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineUsergroupAdd, AiOutlineSolution } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import Image from "next/image";

const data = [
  {
    type: "colored",
    title: "Expertise Across Industries",
    description:
      "With expertise in the share market, legal services, insurance, and property listing, we offer a one-stop solution for all your financial and legal requirements.",
  },
  {
    type: "white",
    title: "Personalized Service",
    description:
      "We believe in building long-term relationships with our clients, and that starts with understanding your unique goals and priorities.",
  },
  {
    type: "white",
    title: "Comprehensive Solutions",
    description:
      "From conducting through market research for your stock investments to handling complex legal matters, securing the right insurance policies, and facilitating property transactions.",
  },
  {
    type: "colored",
    title: "Comprehensive Due Diligence",
    description:
      "Our team consists of highly skilled professionals with years of experience in their respective fields. From seasoned stock market analysts to expert lawyers, insurance advisors, and associates.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="lg:grid lg:grid-cols-12 items-center">

        {/* Left Section */}
        <div className="col-start-1 col-span-4">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "Roboto Slab, serif" }}>
              Why Choose Us ?
            </h1>

            <div className="flex justify-center lg:justify-center">
              <Image src="/about/choose.png" alt="icon" width={350} height={350} />
            </div>
          </div>
        </div>

        {/* Right Section - Cards */}
        <div className="col-start-6 col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className={`rounded border shadow-sm p-4 text-sm ${item.type === "colored"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 border-gray-300"
                  }`}
              >
                <h2
                  className={`font-semibold mb-2 text-center`}
                  style={{ fontFamily: "Roboto Slab, serif" }}
                >
                  {item.title}
                </h2>
                <p className="text-justify" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
