import Link from "next/link";
import React from "react";

export default function GenreCard({ data }) {
  
  return (
    <Link
      href={`/movies/genres/${data.id}`}
      className="block p-4 bg-blue-600 rounded-lg text-center hover:bg-blue-700 transition"
    >
      <h3 className="text-white font-bold">{data.name}</h3>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.movies?.slice(0, 4).map((movie) => (
          <div key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-32 object-cover rounded-md absolute"
            />
            <p className="text-xs text-white mt-1 text-center">{movie.title}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}
