"use client";
import FreeTrail from "@/components/FreeTrail";
import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import ToggleButton from "@/components/ToggleButton";

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

  const [activeSection, setActiveSection] = useState("movies");

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
      <div className="mb-20 lg:mb-24 mt-12">
        <HeroSlider />
      </div>
      <div className="block md:hidden w-full text-center">
        <ToggleButton setActiveSection={setActiveSection} activeSection={activeSection} />
      </div>
      <div className="hidden md:block">
        <SectionContent
          title="Movies"
          type="movie"
          genres={genres}
          data1={movies}
          data1Title="Now Playing"
          data2={upcoming}
          data2Title="New Releases"
          isUpComing={true}
          loading={loading}
        />
        <SectionContent
          title="Shows"
          type="tv"
          genres={showGenres}
          data1={popularShow}
          data1Title="Popular Show"
          data2={onShow}
          data2Title="New Released Shows"
          loading={loading}
        />
      </div>
      <div className="block md:hidden">
        {activeSection==="movies"? (
          <SectionContent
            title="Movies"
            type="movie"
            genres={genres}
            data1={movies}
            data1Title="Now Playing"
            data2={upcoming}
            data2Title="New Releases"
            isUpComing={true}
            loading={loading}
          />
        ) : (
          <SectionContent
            title="Shows"
            type="tv"
            genres={showGenres}
            data1={popularShow}
            data1Title="Popular Show"
            data2={onShow}
            data2Title="New Released Shows"
            loading={loading}
          />
        )}
      </div>
      <div>
        <FreeTrail />
      </div>
    </div>
  );
}
