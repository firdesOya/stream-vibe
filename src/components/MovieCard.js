import {
  formatDurationShort,
  formatPopularity,
  randomNumberInRange,
} from "@/utils/helpers";
import React from "react";

export default function MovieCard({ data, isUpComing }) {
  const randomNumber = randomNumberInRange(60, 180);
  return (
    <div className=" p-3 lg:p-4 xl:p-5 bg-black-500 overflow-hidden cursor-pointer relative rounded-md border border-black-400">
      <div className="transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : "/placeholder.jpg"
          }
          alt={data.title}
          className="w-full h-[193px] md:h-[232px] lg:max-h-[281px] rounded-md object-cover"
        />
        {isUpComing ? (
          <div className="flex items-center justify-center date-info mt-4">
            Released at
            <span>
              {new Date(data.release_date).toLocaleDateString("en-GB", {
                year: "numeric",
                day: "numeric",
                month: "long",
              })}
            </span>
          </div>
        ) : (
          <div className="flex justify-between items-center mt-4">
            <span className="icon-info">
              <img
                src="/icons/clock.svg"
                alt="icon-clock"
                className="w-5 h-5"
              />
              {formatDurationShort(randomNumber)}
            </span>
            <span className="icon-info">
              <img
                src="/icons/watcher.svg"
                alt="icon-watcher"
                className="w-5 h-5"
              />
              {formatPopularity(data.popularity)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
