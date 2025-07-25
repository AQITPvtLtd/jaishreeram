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
    }
  };

  return (
    <div className="text-black">
      <h1 className="text-center text-3xl font-semibold px-10 pt-4 mt-6" style={{ fontFamily: "Roboto Slab, serif" }}>
        Contact Us
      </h1>
      <h3 className="text-center text-xl" style={{ fontFamily: "Roboto Slab, serif" }}>
        Book Your Free Consultation Now
      </h3>
      <div className="lg:grid grid-cols-12">
        <div className="col-start-2 col-span-5">
          <div className="px-8">
            <div
              className="space-y-6 lg:mr-10 p-6 mt-10 bg-white rounded-lg shadow-md animate-slideIn"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <Link href="tel:+91 9990748899" target="__blank">
                <div className="flex space-x-2 py-1">
                  <IoCall className="text-xl text-orange-500" />
                  <p className="text-lg text-gray-800 font-semibold">
                    +91 99907 48899
                  </p>
                </div>
              </Link>

              <Link href="mailto:info@jsrpvtltd.com" target="__balnk">
                <div className="flex space-x-2">
                  <MdEmail className="text-xl text-orange-500" />

                  <p className="text-lg text-gray-800 font-semibold">
                    info@jsrpvtltd.com
                  </p>
                </div>
              </Link>

              <Link
                href={"https://maps.app.goo.gl/KhMMQsYeJR6J9KMZ9"}
                target="__blank"
              >
                <div className="flex space-x-2 py-1">
                  <div>
                    <IoLocation className="text-xl text-orange-500" />
                  </div>
                  <p className="text-lg text-gray-800 font-semibold">
                    Office no. 02, 220/3, Vill, Shalimar Bagh,
                    <br /> New Delhi, Delhi - 110088
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="px-8 mt-10">
            <div
              className="text-center mt-4 lg:mr-10 p-6 bg-white rounded-lg shadow-md animate-slideIn"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <h1 className="text-2xl font-semibold py-2" style={{ fontFamily: "Roboto Slab, serif" }}>
                Connect with Us on Social Media
              </h1>
              <p className="font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
                Stay informed with the latest news and insights from JSR by
                connecting with us on social media. Join the conversation and
                engage with our community.
              </p>
              <div className="flex gap-4 text-4xl mt-4 justify-center">
                <Link
                  href={
                    "https://www.instagram.com/jsr_pvt_ltd/?igsh=MTU1cDdwbGVpeHp6cg%3D%3D"
                  }
                  target="_blank"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  }}
                  className="rounded-full"
                >
                  <FaInstagram className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61558692683271"
                  }
                  target="_blank"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  }}
                  className="rounded-full"
                >
                  <FaFacebook className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
                </Link>

                <Link
                  href={"https://in.pinterest.com/jsr23031991/"}
                  target="_blank hover"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  }}
                  className="rounded-full"
                >
                  <FaPinterest className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
                </Link>

                <Link
                  href={"https://x.com/Jsr23031991"}
                  target="_blank hover"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  }}
                  className="rounded-full"
                >
                  <FaSquareXTwitter className="bg-black rounded-full text-white p-1.5 hover:text-orange-500" />
                </Link>

                <Link
                  href={"https://www.youtube.com/@Jsr_Pvt_Ltd"}
                  target="_blank hover"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  }}
                  className="rounded-full"
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

        <div className="col-span-5 flex justify-center items-center py-10 px-8">
          <form
            className="bg-white text-gray-800 px-8 py-4 rounded-lg shadow-md w-full max-w-lg"
            onSubmit={handleSubmit}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <h1 className="text-center font-semibold text-2xl text-orange-500 mb-4" style={{ fontFamily: "Roboto Slab, serif" }}>Submit Your Query</h1>
            <div className="mb-3">
              <label htmlFor="Fname" className="block text-md font-medium mb-1">
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

            <div className="mb-3">
              <label htmlFor="Lname" className="block text-md font-medium mb-1">
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

            <div className="mb-3">
              <label htmlFor="Phone" className="block text-md font-medium mb-1">
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

            <div className="mb-3">
              <label htmlFor="Email" className="block text-md font-medium mb-1">
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

            <div className="mb-3">
              <label
                htmlFor="Message"
                className="block text-md font-medium mb-1"
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
                style={{ fontFamily: "Roboto Slab, serif" }}
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
