import React from "react";
import Button from "./Button";

export default function IntroHero() {
  const text = `StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more. You
              can also create your own watchlists, so you can easily find the
              content you want to watch. `;
  const mobileText = text.split(". ")[0] + ".";
  return (
    <div className="max-w-[1140px] mx-auto text-center flex flex-col justify-center items-center">
      <div className="mb-10">
        <h2 className="xl:text-6xl lg:text-5xl text-3xl text-white font-bold ">
          The Best Streaming Experience
        </h2>
        <p className="hidden lg:block text-sm text-gray-800 mt-4 ">{text}</p>
        <p className="block lg:hidden text-sm text-gray-800 mt-4 ">
          {mobileText}
        </p>
      </div>
      <Button
        title="Start Watching Now"
        icon="/icons/play.svg"
        className="w-[219px]"
      />
    </div>
  );
}
