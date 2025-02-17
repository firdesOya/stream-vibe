"use client";
import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";

import {
  fetchGenresMoviesData,
  fetchGenresShowsData,
  fetchMoviesData,
  fetchOnShowData,
  fetchPopularShowData,
  fetchUpComingData,
} from "@/utils/api";
import React, { useEffect, useState } from "react";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showGenres, setShowGenres] = useState([]);
  const [popularShow, setPopularShow] = useState([]);
  const [onShow, setOnShow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const upComingData = await fetchUpComingData();
        const moviesData = await fetchMoviesData();
        const showData = await fetchGenresShowsData();
        const movieGenreData = await fetchGenresMoviesData();
        const popularShowData = await fetchPopularShowData();
        const onShowData = await fetchOnShowData();

        setOnShow(onShowData);
        setPopularShow(popularShowData);
        setShowGenres(showData);
        setGenres(movieGenreData);
        setMovies(moviesData);
        setUpComing(upComingData);
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mb-20 lg:mb-24 mt-12"><HeroSlider /></div>
      <div className="flex flex-col gap-20 py-10 lg:border relative lg:border-black-500 rounded-md">
        <div className="bg-red-700 -top-5 left-10 px-5 py-2 text-base font-semibold rounded-md text-white absolute">
          Movies
        </div>
        <Section
          cardType="genre"
          type="movie"
          title="Our Genres"
          data={genres}
          loading={loading}
        />
        <Section
          cardType="movie"
          title="Now Playing"
          data={movies}
          loading={loading}
        />
        <Section
          isUpComing={true}
          cardType="movie"
          title="New Releases"
          data={upcoming}
          loading={loading}
        />
      </div>
      <div className="flex flex-col gap-20 py-10 lg:border mt-[120px] relative lg:border-black-500 rounded-md">
        <div className="bg-red-700 -top-5 left-10 px-5 py-2 text-base font-semibold rounded-md text-white absolute">
          Shows
        </div>
        <Section
          cardType="genre"
          type="tv"
          title="Our Genres"
          data={showGenres}
          loading={loading}
        />
        <Section
          cardType="movie"
          title="Popular Show"
          data={popularShow}
          loading={loading}
        />
        <Section
          cardType="movie"
          title="New Released Shows"
          data={onShow}
          loading={loading}
        />
      </div>
    </div>
  );
}
