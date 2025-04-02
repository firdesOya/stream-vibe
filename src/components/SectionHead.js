import React from "react";

export default function SectionHead({ title, subtitle }) {
  return (
    <div className="mt-[120px]">
      <h2 className="lg:text-3xl 2xl:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-3 text-sm lg:text-base max-w-[1120px]">{subtitle}</p>}
    </div>
  );
}
