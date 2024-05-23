import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <h1 className="text-center text-6xl font-semibold px-10 py-4">Contact Us</h1>
      <h3 className="text-center text-3xl font-semibold">
        Book Your Free Consultation Now
      </h3>
      <div className="lg:grid grid-cols-12 items-center lg:mt-10">
        <div className="col-start-3 col-span-4 space-y-4 lg:mr-10">
          <div className="flex items-center space-x-3">
            <IoCall className="text-3xl text-blue-800" />
            <p className="text-lg text-white-800 font-semibold">
              +91 9582-930-940
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <MdEmail className="text-3xl text-blue-800" />
            <p className="text-lg text-white-800 font-semibold">
              info@jsrpvtltd.com
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <IoLocation className="text-6xl text-blue-800" />
            <p className="text-lg text-white-800 font-semibold">
              G-36 First Floor, Connaught Cir, Block G, Connaught Place, New
              Delhi, Delhi 110001
            </p>
          </div>
        </div>

        <div className="col-span-5">
          <form
            action=""
            className=" bg-black text-white p-8 rounded-lg shadow-md w-full max-w-md"
          >
            <div className="mb-4">
              <label for="Fname" className="block text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="Fname"
                name="Fname"
                placeholder="Enter Your First Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label for="Lname" className="block text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="Lname"
                name="Lname"
                placeholder="Enter Your Last Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label for="phone" className="block text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label for="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label for="message" className="block text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Write Your Message Here.."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
