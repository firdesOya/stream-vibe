import React from "react";

export default function SliderButtons({ swiperRef,currentIndex }) {

  return (
    <div className="flex items-center justify-between p-3 border-2 border-black-500 rounded-md lg:w-[205px] xl:w-[257px]">
      <button
        onClick={() => {
          if (swiperRef.current) swiperRef.current.slidePrev();
        }}
        className="cursor-pointer md:w-11 md:h-11 xl:w-14 xl:h-14 rounded-md bg-black-500 flex items-center justify-center"
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
          if (swiperRef.current) swiperRef.current?.slideNext();
        }}
        className="cursor-pointer md:w-8 md:h-8 lg:w-11 lg:h-11 xl:w-14 xl:h-14 rounded-md bg-black-500 flex items-center justify-center"
      >
        <img src="/icons/right-arrow.svg" />
      </button>
    </div>
  );
}
