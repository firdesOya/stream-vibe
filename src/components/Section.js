"use client";
import React, { useRef, useState } from "react";
import MovieCard from "./SectionCard";
import GenreCard from "./GenreCard";
import SliderButtons from "./SliderButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import SkeletonCard from "./SkeletonCard";
import Link from "next/link";

export default function Section({
  data,
  title,
  type,
  cardType,
  isUpComing,
  loading,
}) {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const CardComponent = cardType === "movie" ? MovieCard : GenreCard;

  return (
    <div className="w-full flex flex-col px-0">
      <div className="flex flex-row justify-between items-center w-full mb-5 lg:mb-10 xl:mb-12">
        <h2 className="font-bold text-3xl">{title}</h2>
        <div className="hidden lg:block ">
          <SliderButtons swiperRef={swiperRef} currentIndex={currentIndex} />
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
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
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="w-full overflow-hidden"
      >
        {loading ? (
          <div className="flex gap-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-52">
                <SkeletonCard />
              </div>
            ))}
          </div>
        ) : (
          data.map((item) => (
            <SwiperSlide key={item.id}>
          
                <CardComponent
                  data={item}
                  isUpComing={isUpComing}
                  type={type}
                />

            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
