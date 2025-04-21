import React from "react";

export default function ToggleButton({
  options,
  setActiveSection,
  activeSection,
}) {
  return (
    <div className="p-2 border border-solid border-black-400 rounded-md flex justify-between flex-row w-full">
      {options.map((option) => {
        return (
          <div key={option.value} className="w-1/2">
            <button
              className={`text-sm py-3 w-full  transition duration-300 ease-in-out ${
                activeSection === option.value
                  ? "text-white bg-black-500 rounded-md"
                  : "text-gray-800 bg-transparent"
              }`}
              onClick={() => setActiveSection(option.value)}
            >
              {option.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}
