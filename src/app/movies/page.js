import MovieSection from "@/components/MovieSection";
import React from "react";

export default function MoviePage() {
  return (
    <div className="flex flex-col gap-20">
      <MovieSection
        title="Now Playing"
        url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`}
      />
      <MovieSection
        isUpComing={true}
        title="New Releases"
        url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`}
      />
    </div>
  );
}
