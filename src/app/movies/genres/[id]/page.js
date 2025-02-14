"use client";
import MovieCard from "@/components/MovieCard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function GenreMovies() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const onClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=${id}&page=${page}&limit=10`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setMovies((prevMovies) =>
          page === 1 ? data.results : [...prevMovies, ...data.results]
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchMovies();
    }
  }, [id, page]);

  return (
    <div className="container flex flex-col items-center">
      <div className="flex flex-wrap w-full gap-5 justify-center ">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
      <button
        onClick={onClick}
        className="px-5 py-2 rounded-md mt-6 border border-black-400 bg-black-500 hover:opacity-45 "
      >
        Load more
      </button>
    </div>
  );
}
