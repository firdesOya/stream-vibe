import {
  formatDurationShort,
  formatPopularity,
  randomNumberInRange,
} from "@/utils/helpers";
import React from "react";

export default function MovieCard({ movie, isUpComing }) {
  const randomNumber = randomNumberInRange(60, 180);
  return (
    <div className="w-full p-3 lg:p-4 xl:p-5 bg-black-500 rounded-md border border-black-400">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/placeholder.jpg"
        }
        alt={movie.title}
        className="w-full h-auto rounded-md object-cover"
      />
      {isUpComing ? (
        <div className="flex items-center justify-center icon-info !text-[10px] mt-4">
          Released at
          <span>
            {new Date(movie.release_date).toLocaleDateString("en-GB", {
              year: "numeric",
              day: "numeric",
              month: "long",
            })}
          </span>
        </div>
      ) : (
        <div className="flex justify-between items-center mt-4">
          <span className="icon-info">
            <img src="/icons/clock.svg" alt="icon-clock" className="w-5 h-5" />
            {formatDurationShort(randomNumber)}
          </span>
          <span className="icon-info">
            <img
              src="/icons/watcher.svg"
              alt="icon-watcher"
              className="w-5 h-5"
            />
            {formatPopularity(movie.popularity)}
          </span>
        </div>
      )}
    </div>
  );
}
