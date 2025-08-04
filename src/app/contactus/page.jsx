import React from "react";
import Contact from "./Contact";

const page = () => {
  return (
    <div>
      <Contact />

      <div className="h-96 px-5 lg:px-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5045655162667!2d77.20092079999999!3d28.644607200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdd1e0358311%3A0x42da25870dac89f3!2sTek%20Booster!5e0!3m2!1sen!2sin!4v1742380378280!5m2!1sen!2sin"
          width=""
          height="350"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          className="w-full rounded-md"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
};

export default page;
