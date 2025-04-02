import React from "react";

export default function PlayButton({ title, className = "" }) {
  const baseClasses =
    "text-sm font-bold z-20 bg-red-700 hover:bg-red-500 flex justify-center items-center gap-2 py-3 rounded-md cursor-pointer";
  return (
    <button className={`${baseClasses} ${className}`}>
      <img src="/icons/play.svg" />
      {title}
    </button>
  );
}
