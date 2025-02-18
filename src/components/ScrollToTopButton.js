"use client";
import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={` ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } w-12 h-12 fixed z-10 right-10 bottom-10 desktop:left-1/2 desktop:-translate-x-1 desktop:ml-[750px] flex items-center justify-center cursor-pointer bg-black-800 border border-black-200 rounded-full rotate-90`}
    >
      <img src="/icons/left-arrow.svg" className="w-full h-full p-2" />
    </button>
  );
}
