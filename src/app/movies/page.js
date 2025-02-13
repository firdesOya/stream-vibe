"use client";
import MovieSection from "@/components/MovieSection";
import React, { useEffect, useState } from "react";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [genreRes, moviesRes, upcomingRes] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
          ),
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
          ),
        ]);
        const [genreData, moviesData, upcomingData] = await Promise.all([
          genreRes.json(),
          moviesRes.json(),
          upcomingRes.json(),
        ]);
        const genresWithMovies = genreData.genres.map((genre) => ({
          ...genre,
          movies: moviesData.results.filter((movie) =>
            movie.genre_ids.includes(genre.id)
          ),
        }));

        setGenres(genresWithMovies);
        setMovies(moviesData.results);
        setUpComing(upcomingData.results);
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-20 py-10 lg:border lg:border-black-500 rounded-md">
      <MovieSection cardType="genre" title="Genres" data={genres} />
      <MovieSection cardType="movie" title="Now Playing" data={movies} />
      <MovieSection
        isUpComing={true}
        cardType="movie"
        title="New Releases"
        data={upcoming}
      />
    </div>
  );
}
