"use client";

import React, { useState, useEffect } from "react";
import { getBlogData } from "@/services/blogdata";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import Moment from "react-moment";
const BlogDetailed = ({ url }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getBlogData();
      setBlog(data.result);
    };
    getData();
  }, []);
  const filteredArticle = blog?.find((a) => a.url === url);
  return (
    <div className="overflow-x-hidden mt-[180px]">
      <div className="lg:grid grid-cols-4">
        <div className="col-span-3 p-4 ">
          <h1 className="lg:text-5xl text-3xl py-6 font-bold text-center text-primary">
            {filteredArticle?.title}
          </h1>
          <div>
            <Image
              src={`/blogs/${filteredArticle?.image}`}
              width={1000}
              height={1000}
              className="w-full rounded-md"
            />
            <div className="flex pt-2">
              <p className="text-gray-600 flex">
                <SlCalender className="text-primary mt-1 mr-1" />
                <Moment format="MMMM DD, YYYY">{filteredArticle?.date}</Moment>
              </p>
              <p className="text-gray-600 flex ml-10">
                <FaUser className="text-primary mt-1 mr-1" />
                Team JaiShreeRam
              </p>
            </div>
            <div className="mt-4  rounded-lg text-justify">
              <div
                dangerouslySetInnerHTML={{
                  __html: filteredArticle?.content,
                }}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="p-3 border m-4 rounded-md">
          <h1 className="text-2xl font-bold text-primary">More Blogs</h1>
          <ul className="mt-3">
            {blog.map((a) => (
              <Link
                href={`/blogs/${a.url}`}
                className="flex hover:text-orange-600 hover:translate-x-2 duration-300"
              >
                <table className="">
                  <tbody>
                    <tr>
                      <td className="align-top">
                        <FaArrowCircleRight className="mt-1.5 mr-1 " />
                      </td>
                      <td className=" align-top text-black">{a.title}</td>
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
