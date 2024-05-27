import Link from "next/link";
import React from "react";

const Top = () => {
  return (
    <div className="flex justify-around p-3.5 bg-black text-white overflow-hidden">
      <div>
        <h2>Book Your FREE Consultation Now!</h2>
      </div>
      <div>
        <h2>
          <Link href="tel:91 9582-930-940" target="__blank">
            CALL NOW! <span>+91 9582-930-940</span>{" "}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Top;
