"use client";
import React, { useState, useEffect, useRef } from "react";
import Top from "./Top";
import Navbar from "./Navbar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topRef.current) {
        const topHeight = topRef.current.getBoundingClientRect().height;
        setIsSticky(window.scrollY >= topHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top bar (not sticky) */}
      <div ref={topRef}>
        <Top />
      </div>

      {/* Navbar becomes sticky only after scrolling past Top */}
      <div
        className={`w-full z-50 overflow-x-hidden transition-all duration-300 ${isSticky ? "fixed top-0 shadow-md" : ""
          }`}
        style={
          { boxShadow: "0px 25px 20px -20px rgba(0,0,0,0.45)" }
        }
      >
        <Navbar />
      </div>

    </div>
  );
};

export default Header;
