"use client";
import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import GenreCard from "./GenreCard";
import SliderButtons from "./SliderButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

export default function MovieSection({ data, title, cardType, isUpComing }) {
  const swiperRef = useRef(null);

  const CardComponent = cardType === "movie" ? MovieCard : GenreCard;

  return (
    <div className="w-full flex flex-col px-0 lg:px-[40px] xl:px-[50px]">
      <div className="flex flex-row justify-between items-center w-full mb-5 lg:mb-10 xl:mb-12">
        <h2 className="font-bold text-3xl">{title}</h2>
        <div className="hidden lg:block">
          <SliderButtons swiperRef={swiperRef} />
        </div>
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full overflow-hidden"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CardComponent data={item} isUpComing={isUpComing} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
