"use client";
import SectionCard from "@/components/SectionCard";
import SkeletonCard from "@/components/SkeletonCard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function GenreMoviesAndShows() {
  const { id, type } = useParams();
  const [content, setContent] = useState([]);
  const [genreName, setGenreName] = useState("");
  const [page, setPage] = useState(1);

  const onClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchMoviesAndShows = async () => {
      try {
        const genresRes = await fetch(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        );
        if (!genresRes.ok) {
          throw new Error(`HTTP error! Status: ${genresRes.status}`);
        }
        const genresData = await genresRes.json();
        const matchedGenre = genresData.genres.find(
          (genre) => Number(id.split("-")[0]) === genre.id
        );
        setGenreName(matchedGenre ? matchedGenre.name : "Unknown Genre");

        const res = await fetch(
          `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=${id}&page=${page}&limit=10`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setContent((prevContent) =>
          page === 1 ? data.results : [...prevContent, ...data.results]
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchMoviesAndShows();
  }, [id, page, type]);
  console.log(genreName);
  return (
    <div className="container flex flex-col ">
      <h2 className="text-3xl text-start my-5 font-bold capitalize">
        {type}-{genreName}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-5 justify-start ">
        {content.length > 0
          ? content.map((content) => (
              <SectionCard key={content.id} data={content} />
            ))
          : Array.from({ length: 10 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
      </div>
      <div className="text-center">
        <button
          onClick={onClick}
          className="px-5 py-2 max-w-[200px] rounded-md mt-6 border border-black-400 bg-black-500 hover:opacity-45 "
        >
          Load more
        </button>
      </div>
    </div>
  );
}
