import React from "react";
import Blogs from "./Blogs";

export const metadata = {
  title: "JSR Insights | Market Trends, Legal Tips & Property News",
  description:
    "Read expert blogs from JSR Pvt Ltd in New Delhi on stock markets, legal updates, digital marketing, health insurance, and property trends—all in one place.",
  keywords: [
    "expert blogs in new delhi",
    "jsr blog posts",
    "stock market insights",
    "legal updates india",
    "health insurance tips",
    "real estate news",
    "financial trends blog",
    "market analysis delhi",
    "jsr content hub",
    "informative blogs"
  ],
};


const page = () => {
  return (
    <div>
      <Blogs />
    </div>
  );
};

export default page;
