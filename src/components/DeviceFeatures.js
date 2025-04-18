import React from "react";
import SectionHead from "./SectionHead";
import { provideDevices } from "@/config";

export default function DeviceFeatures() {
  return (
    <section className="mt-[120px]">
      <SectionHead
        title="We Provide you streaming experience across various devices."
        subtitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-5 2xl:gap-7 mt-14">
        {provideDevices.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 lg:p-10 2xl:p-[50px] bg-gradient-devices border border-black-400 rounded-md "
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 lg:w-14 lg:h-14 2xl:w-[72px] 2xl:h-[72px] p-3 flex items-center justify-center bg-black-700 border border-black-500 rounded-md">
                  <img src={item.imgSrc} />
                </div>
                <h4 className="text-lg xl:text-xl 2xl:text-2xl text-white">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm lg:text-base 2xl:text-lg mt-5 lg:mt-6 2xl:mt-[30px] text-gray-800">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
