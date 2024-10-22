import React from "react";
import BlogDetailed from "./BlogDetailed";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <BlogDetailed url={url} />
    </div>
  );
};

export default page;
