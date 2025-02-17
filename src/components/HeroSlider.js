"use client";
import { fetchNowPlayingData } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderButtons from "./SliderButtons";

export default function HeroSlider() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchNowPlayingData();
      setContent(res);
    };
    fetchData();
  }, []);

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
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
          <div className="text-center absolute z-10 min-w-[375px] lg:w-[1200px] px-10 bottom-4 lg:bottom-[126px] left-1/2 transform -translate-x-1/2">
            <div className="mb-6">
              <h2 className="font-bold mb-1 text-2xl xl:text-4xl">
                {item.title}
              </h2>
              <p className="font-medium hidden md:hidden xl:block text-base text-gray">
                {item.overview}
              </p>
            </div>
            <div className="w-full px-4 relative z-20 flex flex-col lg:flex-row items-center justify-center gap-5 ">
              <button
                onClick={(e) => console.log(e.currentTarget)}
                className="bg-red-700 text-sm font-bold z-20 w-full lg:w-[128px] flex justify-center items-center gap-2 py-2 lg:py-4 rounded-md cursor-pointer"
              >
                <img src="/icons/play.svg" />
                Play Now
              </button>
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
            <div className="w-full"><SliderButtons/></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
