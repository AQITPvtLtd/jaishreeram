import React from "react";
import Top from "./Top";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-50 overflow-x-hidden" style={{ boxShadow: '0px 25px 20px -20px rgba(0,0,0,0.45)' }}>
      <Top />
      <Navbar />
    </div>
  );
};

export default Header;
