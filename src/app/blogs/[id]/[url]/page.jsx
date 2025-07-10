import React from "react";
import BlogDetailed from "./BlogDetailed";

const page = ({ params }) => {
  console.log("Params received:", params); // Debugging log
  const { id, url } = params;
  console.log("Extracted id and url:", { id, url }); // Check values
  return (
    <div>
      <BlogDetailed id={id} url={url} />
    </div>
  );
};

export default page;
