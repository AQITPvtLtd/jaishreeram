"use client";

import React from "react";
import BlogDetailed from "./BlogDetailed";

const Page = ({ params }) => {
  // ✅ Always decode the slug safely (important for numbers, hyphens, etc.)
  const url = decodeURIComponent(params.url);

  return (
    <div>
      <BlogDetailed url={url} />
    </div>
  );
};

export default Page;
