import React from "react";
import Section from "./Section";

export default function SectionContent({
  type,
  genres,
  data1,
  data1Title,
  data2,
  data2Title,
  isUpComing = false,
  loading,
  title
}) {
  return (
    <div className="flex flex-col gap-20 md:px-10 py-10 md:border md:mt-[120px] relative md:border-black-500 rounded-md">
      <div className="hidden md:block bg-red-700 -top-5 left-10 px-5 py-2 text-base font-semibold rounded-md text-white absolute">
        {title}
      </div>
      <Section
        cardType="genre"
        type={type}
        title="Our Genres"
        data={genres}
        loading={loading}
      />
      <Section
        cardType="movie"
        title={data1Title}
        data={data1}
        loading={loading}
      />
      <Section
        cardType="movie"
        title={data2Title}
        data={data2}
        loading={loading}
        isUpComing={isUpComing}
      />
    </div>
  );
}
