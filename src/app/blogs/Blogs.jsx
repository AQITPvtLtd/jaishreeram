"use client";

import React, { useEffect, useState } from "react";
import { getBlogData } from "@/services/blogdata";
import Link from "next/link";
import Image from "next/image";
import Moment from "react-moment";
import { SlCalender } from "react-icons/sl";
const Blogs = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getBlogData();
      setBlog(data.result.reverse());
    };
    getData();
  }, []);
  return (
    <div>
      <div className="mt-[200px]">
        <h1 className="text-center text-3xl mb-7 font-bold">
          Check Our Latest Blogs
        </h1>
        <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
          {blog?.map((b) => (
            <BlogCards key={b?.id} blog={b} />
          ))}
        </div>
      </div>
    </div>
  );
};
const BlogCards = ({ blog }) => {
  const url = blog?.url;
  const id = blog?.id;
  return (
    <div className="max-w-sm bg-bg bg-opacity-60 border border-gray-200 rounded-lg shadow">
      <Image
        className="rounded-t-lg"
        src={`/blogs/${blog?.image}`}
        alt="blog-image"
        width={400}
        height={400}
      />
      <div className="p-5">
        <Link href={`/blogs/${id}/${url}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {blog.title}
          </h5>
        </Link>
        <p className="text-gray-600 flex">
          <SlCalender className="text-primary mt-1 mr-1" />
          <Moment format="MMMM DD, YYYY">{blog?.date}</Moment>
        </p>
        <p className="mb-3 font-normal text-gray-700"></p>
        <Link
          href={`/blogs/${id}/${url}`}
          className="inline-flex bg-blue items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-orange-500 bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default Blogs;
