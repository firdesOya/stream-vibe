import React from "react";

export default function ToggleButton({ setActiveSection, activeSection }) {
  const onToggle = () => {
    setActiveSection(!activeSection);
  };
  return (
    <div className="p-2 border border-solid border-black-400 rounded-md ">
      <button
        className={`${
          activeSection === "movies"
            ? "text-white bg-black-500"
            : "text-gray-800 bg-transparent"
        } text-sm py-3 w-1/2`}
        onClick={() => setActiveSection("movies")}
      >
        Movies
      </button>
      <button
        className={`${
          activeSection === "shows"
            ? "text-white bg-black-500"
            : "text-gray-800 bg-transparent"
        } text-sm py-3 w-1/2`}
        onClick={() => setActiveSection("shows")}
      >
        Shows
      </button>
    </div>
  );
}
