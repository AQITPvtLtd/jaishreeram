"use client";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { form } from "@/services/user";
import Swal from "sweetalert2";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

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
      Swal.fire({
        title: "Form Sumbitted Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });

      // Swal(response.message, {
      //   position: "top-center",
      // });
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      // toast.error(response.message, {
      //   position: "top-center",
      // });
    }
  };

  return (
    <div className="text-black">
      <h1 className="text-center text-6xl font-semibold px-10 py-4">
        Contact Us
      </h1>
      <h3 className="text-center text-3xl font-semibold">
        Book Your Free Consultation Now
      </h3>
      <div className="lg:grid grid-cols-12">
        <div className="col-start-3 col-span-4">
          <div className="space-y-6 lg:mr-10 p-6 mt-20 bg-white rounded-lg shadow-md animate-slideIn">
            <Link href="tel:+91 9582-930-940" target="__blank">
              <div className="flex items-center space-x-4">
                <IoCall className="text-4xl text-orange-500" />
                <p className="text-lg text-gray-800 font-semibold">
                  +91 9582-930-940
                </p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <MdEmail className="text-4xl text-orange-500" />
              <Link href="mailto:info@jsrpvtltd.com" target="__balnk">
                <p className="text-lg text-gray-800 font-semibold">
                  info@jsrpvtltd.com
                </p>
              </Link>
            </div>
            <Link
              href={"https://maps.app.goo.gl/m9QsWKnZU1Ka7eFV6"}
              target="__blank"
            >
              <div className="flex items-center space-x-4">
                <IoLocation className="text-6xl text-orange-500" />
                <p className="text-lg text-gray-800 font-semibold">
                  G-36 First Floor, Connaught Cir, Block G, Connaught Place, New
                  Delhi, Delhi 110001
                </p>
              </div>
            </Link>
          </div>

          <div>
            <div className="text-center mt-4 lg:mr-10 p-6 bg-white rounded-lg shadow-md animate-slideIn">
              <h1 className="text-2xl font-semibold py-2">
                Connect with Us on Social Media
              </h1>
              <p className="font-semibold">
                Stay informed with the latest news and insights from Calcya by
                connecting with us on social media. Join the conversation and
                engage with our community.
              </p>
              <div className="flex gap-4 text-4xl mt-4 justify-center">
                <Link
                  href={
                    "https://www.instagram.com/jsr_pvt_ltd/?igsh=MTU1cDdwbGVpeHp6cg%3D%3D"
                  }
                  target="_blank"
                >
                  <FaInstagram className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61558692683271"
                  }
                  target="_blank"
                >
                  <FaFacebook className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
                </Link>

                {/* <Link href={"/"} target="_blank">
              <CiLinkedin className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
            </Link> */}
                <Link
                  href={"https://in.pinterest.com/jsr23031991/"}
                  target="_blank hover"
                >
                  <FaPinterest className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
                </Link>

                <Link href={"https://x.com/Jsr23031991"} target="_blank hover">
                  <FaSquareXTwitter className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
                </Link>

                <Link
                  href={"https://www.youtube.com/@Jsr_Pvt_Ltd"}
                  target="_blank hover"
                >
                  <FaYoutube className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
                </Link>
              </div>
            </div>
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
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
