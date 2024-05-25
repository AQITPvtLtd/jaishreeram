"use client";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { form } from "@/services/user";
import { toast } from "react-toastify";

const Contact = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await form(formData);

    if (response.success) {
      toast.success(response.message, {
        position: "top-center",
      });
      router.push("/");
    } else {
      toast.error(response.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="text-black bg-slate-300">
    <h1 className="text-center text-6xl font-semibold px-10 py-4 mt-24">
      Contact Us
    </h1>
    <h3 className="text-center text-3xl font-semibold">
      Book Your Free Consultation Now
    </h3>
    <div className="lg:grid grid-cols-12 items-center p-10">
      <div className="col-start-3 col-span-4 space-y-6 lg:mr-10 p-6 bg-white rounded-lg shadow-md animate-slideIn">
        <div className="flex items-center space-x-4">
          <IoCall className="text-4xl text-blue-600" />
          <p className="text-lg text-gray-800 font-semibold">
            +91 9582-930-940
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <MdEmail className="text-4xl text-blue-600" />
          <p className="text-lg text-gray-800 font-semibold">
            info@jsrpvtltd.com
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <IoLocation className="text-6xl text-blue-600" />
          <p className="text-lg text-gray-800 font-semibold">
            G-36 First Floor, Connaught Cir, Block G, Connaught Place, New
            Delhi, Delhi 110001
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>

      <div className="col-span-5 flex justify-center items-center py-10">
        <form
          className="bg-white text-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="Fname" className="block text-md font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="Fname"
              name="Fname"
              placeholder="Enter Your First Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.Fname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="Lname" className="block text-md font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="Lname"
              name="Lname"
              placeholder="Enter Your Last Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.Lname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="Phone" className="block text-md font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="Phone"
              name="Phone"
              placeholder="Enter Your Phone Number"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.Phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="Email" className="block text-md font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter Your Email Address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.Email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Message"
              className="block text-md font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="Message"
              id="Message"
              placeholder="Write Your Message Here.."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.Message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
