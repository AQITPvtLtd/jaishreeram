import React from "react";
import Servicedata from "./Servicedata";

const page = ({ params }) => {
  const path = params.path;
  return (
    <div>
      <Servicedata path={path} />
    </div>
  );
};

export default page;
