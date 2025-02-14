import Link from "next/link";
import React from "react";

export default function GenreCard({ data }) {
  // const genreMovies = data.movies.filter((movie) =>
  //   movie.genre_ids.includes(data.id)
  // );
  
  // const selectedMovies = genreMovies.slice(0, 4);
  return (
    <Link
      href={`/movies/genres/${data.id}`}
      className="block h-[260px] xl:[360px] p-4 bg-black-600  rounded-lg text-center border border-black-400 transition"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-1 ">
        {data.movies?.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[98px] object-cover rounded-md "
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center w-full ">
        <h3 className="text-white font-bold">{data.name}</h3>
        <button>
          <img src="/icons/right-arrow.svg" />
        </button>
      </div>
    </Link>
  );
}
