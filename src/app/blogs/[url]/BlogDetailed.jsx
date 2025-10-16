"use client";

import React, { useState, useEffect } from "react";
import { getBlogData } from "@/services/blogdata";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import Moment from "react-moment";
import Head from "next/head";

const BlogDetailed = ({ url }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBlogData();
      setBlog(data.result);
    };
    getData();
  }, []);

  const filteredArticle = blog?.find(
    (a) =>
      a.url.trim().toLowerCase() ===
      decodeURIComponent(url).trim().toLowerCase()
  );


  // ✅ Update browser tab title dynamically
  useEffect(() => {
    if (filteredArticle) {
      document.title = filteredArticle.meta_title || filteredArticle.title;
    }
  }, [filteredArticle]);

  if (!filteredArticle) {
    return <p className="text-center text-red-500">Blog not found!</p>;
  }

  return (
    <div className="overflow-x-hidden">
      {/* SEO Meta Tags */}
      <Head>
        <title>{filteredArticle.meta_title || filteredArticle.title}</title>
        <meta
          name="description"
          content={
            filteredArticle.meta_disc ||
            filteredArticle.small_desc ||
            ""
          }
        />
        <meta
          name="keywords"
          content={filteredArticle.meta_keyword || ""}
        />
      </Head>

      <div className="grid lg:grid-cols-12">
        <div className="col-span-8 p-4 ">
          <h1
            className="lg:text-4xl text-3xl py-6 font-bold text-center text-primary"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
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
                <Moment format="MMMM DD, YYYY">
                  {filteredArticle.date}
                </Moment>
              </p>
              <p className="text-gray-600 flex ml-10">
                <FaUser className="text-primary mt-1 mr-1" />
                Team JaiShreeRam
              </p>
            </div>
            <div className="mt-7 pb-7 mx-5 bg-gray-200 px-10 pt-3 rounded-lg text-justify">
              <div
                className="text-2xl text-center mt-4 mb-2"
                style={{ fontFamily: "Roboto Slab, serif" }}
              >
                {filteredArticle.title}
              </div>
              <div className="border border-blue-800 mx-10 mb-4"></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: filteredArticle.content,
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="p-3 border m-4 rounded-md mt-16 h-fit">
            <h1
              className="text-2xl font-bold text-primary"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              More Blogs
            </h1>
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
                        <td
                          className="align-top text-black"
                          style={{ fontFamily: "Roboto Slab, serif" }}
                        >
                          {a.title}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailed;
