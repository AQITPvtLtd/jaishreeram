"use client";

import React, { useState, useEffect } from "react";
import { getBlogData } from "@/services/blogdata";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import Moment from "react-moment";
import Head from 'next/head';


const BlogDetailed = ({ url }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBlogData();
      console.log("Fetched blog data:", data); // Debugging log
      setBlog(data.result);
    };
    getData();
  }, []);

  // Debugging: Log the ID and URL passed in props
  // console.log("Received id and url:", { id, url });

  // Filter the article using both `id` and `url`
  const filteredArticle = blog?.find((a) => a.url == url);

  // Debugging: Log the filtered article
  // console.log("Filtered article:", filteredArticle);

  if (!filteredArticle) {
    return <p className="text-center text-red-500">Blog not found!</p>;
  }

  return (
    <div className="overflow-x-hidden">
      {/* SEO Meta Tags */}
      <Head>
        <title>{blog.meta_title || blog.title}</title>
        <meta name="description" content={blog.meta_desc || blog.short_desc || ""} />
        <meta name="keywords" content={blog.meta_keyword || ""} />
      </Head>
      <div className="lg:grid grid-cols-4">
        <div className="col-span-3 p-4 ">
          <h1 className="lg:text-4xl text-3xl py-6 font-bold text-center text-primary" style={{ fontFamily: "Roboto Slab, serif" }}>
            {filteredArticle.title}
          </h1>
          <div>
            <Image
              src={`/blogs/${filteredArticle.image}`}
              width={1000}
              height={1000}
              className="w-full rounded-md"
              alt={filteredArticle.title}
            />
            <div className="flex pt-2">
              <p className="text-gray-600 flex">
                <SlCalender className="text-primary mt-1 mr-1" />
                <Moment format="MMMM DD, YYYY">{filteredArticle.date}</Moment>
              </p>
              <p className="text-gray-600 flex ml-10">
                <FaUser className="text-primary mt-1 mr-1" />
                Team JaiShreeRam
              </p>
            </div>
            <div className="mt-7 pb-7 mx-24 bg-gray-200 px-10 pt-3 rounded-lg text-justify">
              <div className="text-2xl text-center mt-4 mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
                {filteredArticle.title}
              </div>
              <div className="border border-blue-800 mx-10 mb-4"></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: filteredArticle.content,
                }}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="p-3 border m-4 rounded-md mt-16 h-fit">
          <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: "Roboto Slab, serif" }}>More Blogs</h1>
          <ul className="mt-3">
            {blog.map((a) => (
              <Link
                key={a.id}
                href={`/blogs/${a.url}`}
                className="flex hover:text-orange-600 hover:translate-x-2 duration-300"
              >
                <table>
                  <tbody>
                    <tr>
                      <td className="align-top">
                        <FaArrowCircleRight className="mt-1.5 mr-1 " />
                      </td>
                      <td className="align-top text-black" style={{ fontFamily: "Roboto Slab, serif" }}>{a.title}</td>
                    </tr>
                  </tbody>
                </table>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailed;
