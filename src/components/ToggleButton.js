import React from "react";

export default function ToggleButton({ setActiveSection, activeSection }) {

  return (
    <div className="p-2 border border-solid border-black-400 rounded-md ">
      <button
        className={`${
          activeSection === "movies"
            ? "text-white bg-black-500 rounded-md"
            : "text-gray-800 bg-transparent"
        } text-sm py-3 w-1/2 transition duration-300 ease-in-out`}
        onClick={() => setActiveSection("movies")}
      >
        Movies
      </button>
      <button
        className={`${
          activeSection === "shows"
            ? "text-white bg-black-500 rounded-md"
            : "text-gray-800 bg-transparent"
        } text-sm py-3 w-1/2 transition duration-300 ease-in-out`}
        onClick={() => setActiveSection("shows")}
      >
        Shows
      </button>
    </div>
  );
}
