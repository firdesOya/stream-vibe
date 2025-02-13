"use client";
import MovieCard from "@/components/MovieCard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function GenreMovies() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    if (!id) return;
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=${id}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [id]);

  return (
    <div className="flex w-full flex-wrap gap-5 container justify-center">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
}
