import React from "react";

export default function SectionHead({ title, subtitle }) {
  const firstSentence=subtitle?.split(".")[0]+".";
  return (
    <div>
      <h2 className="text-xl lg:text-3xl 2xl:text-4xl font-bold">{title}</h2>
      {subtitle && <>
        <p className="text-gray-500 mt-3 block md:hidden text-sm ">{firstSentence}</p>
        <p className="text-gray-500 mt-3 hidden md:block text-sm lg:text-base max-w-[1120px]">{subtitle}</p>
      </>}
    </div>
  );
}
