import React from "react";

export default function SectionHead({ title, subtitle }) {
  const firstSentence = subtitle?.split(".")[0] + ".";
  return (
    <div>
      <h2 className="text-xl lg:text-3xl 2xl:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <>
          <p className=" mt-3 block md:hidden global-text ">{firstSentence}</p>
          <p className=" mt-3 hidden md:block global-text max-w-[1120px]">
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
}
