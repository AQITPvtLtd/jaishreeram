import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineSolution } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";

const data = [
  {
    icon: <GrUserExpert />,
    title: "Expertise Across Industries",
    description:
      "With expertise in the share market, legal services, insurance, and property listing, we offer a one-stop solution for all your financial and legal requirements.",
  },
  {
    icon: <BsPersonWorkspace />,
    title: "Personalized Service",
    description:
      "We believe in building long-term relationships with our clients, and that starts with understanding your unique goals and priorities.",
  },
  {
    icon: <AiOutlineSolution />,
    title: "Comprehensive Solutions",
    description:
      "From conducting thorough market research for your stock investments to handling complex legal matters, securing the right insurance policies, and facilitating property transactions.",
  },
  {
    icon: <AiOutlineUsergroupAdd />,
    title: "Trusted Professionals",
    description:
      "Our team consists of highly skilled professionals with years of experience in their respective fields. From seasoned stock market analysts to expert lawyers, insurance advisors, and associates.",
  },
];
const page = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-5xl p-6">Why Choose Us</h1>

      <p className="text-center font-semibold px-5">
        Your Trusted Partner in Success
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0.1) 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 transition-transform transform translate-y-full hover:translate-y-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 transition-transform transform translate-x-full hover:translate-x-0"></div>
            <div className="flex justify-center items-center text-6xl p-3">
              {item.icon}
            </div>
            <h2 className="text-2xl font-semibold text-center mb-2">
              {item.title}
            </h2>
            <p className="text-lg text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
