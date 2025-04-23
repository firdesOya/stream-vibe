import React from "react";

export default function Button({
  title,
  icon,
  onClick,
  className = "",
  variant = "primary",
}) {
  const baseClasses =
    "text-sm 2xl:text-[18px] font-bold z-20 flex justify-center items-center gap-2 py-3 px-5 2xl:py-[18px]  rounded-md cursor-pointer";
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-red-700 hover:bg-red-500 text-white";
  } else if ((variant = "secondary")) {
    variantClasses = "text-white border border-black-400 bg-black-700";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {icon && <img src={icon} alt="icon" />}
      {title}
    </button>
  );
}
