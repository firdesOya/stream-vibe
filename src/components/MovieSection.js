"use client";
import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import SliderButtons from "./SliderButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function MovieSection({ url, title,isUpComing }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();    
        setMovieList(data.results || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [url]);

  return (
    <div className="w-full flex flex-col  px-0 lg:px-[40px]">
      <div className="flex flex-row justify-between items-center w-full mb-5 lg:mb-10 xl:mb-12">
        <h2 className="font-bold text-3xl">{title}</h2>
        <SliderButtons swiperRef={swiperRef} />
      </div>
      {!loading && movieList.length > 0 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          {movieList.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} isUpComing={isUpComing} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
