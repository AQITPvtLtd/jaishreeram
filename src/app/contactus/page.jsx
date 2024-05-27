import React from "react";
import Contact from "./Contact";

const page = () => {
  return (
    <div className="mt-[200px]">
      <Contact />
      <div className="relative pt-[3%]">
        {" "}
        {/* 16:9 Aspect Ratio */}
        <div className="relative h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.589528436316!2d77.2165428!3d28.6328375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3acd5f7af3%3A0xb6a04a02d103e7a0!2sTek%20Booster!5e0!3m2!1sen!2sin!4v1716437984605!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
