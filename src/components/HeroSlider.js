"use client";
import { fetchNowPlayingData } from "@/utils/api";
import React, { useEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Button from "./Button";

export default function HeroSlider() {
  const [content, setContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchNowPlayingData();
      setContent(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          dynamicBullets: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-[468px] lg:h-[710px] desktop:h-[835px]"
      >
        {content.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-full">
              <img
                src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
            </div>
            <div className="text-center max-w-[960px]  absolute z-10 min-w-[375px] lg:w-[1200px] px-10 bottom-4 lg:bottom-[126px] left-1/2 transform -translate-x-1/2">
              <div className="mb-6 ">
                <h2 className="font-bold mb-1 text-3xl xl:text-4xl">
                  {item.title}
                </h2>
                <p className="font-medium hidden md:hidden xl:block text-base text-gray-800">
                  {item.overview}
                </p>
              </div>
              <div className="w-full px-4 relative z-20 flex flex-col lg:flex-row items-center justify-center gap-5 ">
                <Button title="Play now" icon="/icons/play.svg" className="w-full lg:max-w-[157px]"/>
                <div className="flex items-center gap-2">
                  <button className="button-set">
                    <img src="/icons/plus.svg" />
                  </button>
                  <button className="button-set">
                    <img src="/icons/like.svg" />
                  </button>
                  <button className="button-set">
                    <img src="/icons/sound.svg" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full mt-10 hidden lg:flex items-center px-10 bottom-40 justify-between z-50 relative">
        <button
          onClick={() => {
            if (swiperRef.current) swiperRef.current.slidePrev();
          }}
          className="cursor-pointer md:w-11 md:h-11 xl:w-14 xl:h-14 rounded-md bg-black-800 border border-black-500 flex items-center justify-center"
        >
          <img src="/icons/left-arrow.svg" />
        </button>
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1 w-4 rounded-md transition-all ${
                i === currentIndex % 4 ? "bg-red-700" : "bg-black-300"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={() => {
            if (swiperRef.current) swiperRef.current.slideNext();
          }}
          className="cursor-pointer md:w-8 md:h-8 lg:w-11 lg:h-11 xl:w-14 xl:h-14 rounded-md bg-black-800 border border-black-500 flex items-center justify-center"
        >
          <img src="/icons/right-arrow.svg" />
        </button>
      </div>
    </>
  );
}
