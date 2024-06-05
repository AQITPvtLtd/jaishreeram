import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineSolution } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
const data = [
  {
    icon:<GrUserExpert />,
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
    icon:<AiOutlineSolution />,
    title: "Comprehensive Solutions",
    description:
      "From conducting through market research for your stock investments to handling complex legal matters, securing the right insurance policies, and facilitating property transactions.",
  },
  {
    icon:<AiOutlineUsergroupAdd />
    ,
    title: "Trusted Professionals",
    description:
      "Our team consists of highly skilled professionals with years of experience in their respective fields. From seasoned stock market analysts to expert lawyers, insurance advisors, and associates.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center py-5">Why Choose Us</h1>
      <p className="text-2xl font-medium text-center mb-8 text-orange-400">
        Your Trusted Partner in Success
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-slate-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="flex justify-center items-center text-6xl p-3  ">
             <span className="bg-white rounded-full p-5 items-center text-center text-orange-400"> {item.icon} </span> 
            </div>
            
            <h2 className="text-2xl font-semibold text-center mb-2 text-white">
              {item.title}
            </h2>
            <p className="text-lg text-center hover:text-orange-600 font-semibold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
