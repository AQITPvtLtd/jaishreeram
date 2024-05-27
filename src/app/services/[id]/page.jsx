import React from "react";
import Servicedata from "./servicedata";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div className="py-20 mt-[200px]">
      <Servicedata id={id} />
    </div>
  );
};

export default page;
