import React from "react";
import Button from "./Button";

export default function FreeTrail() {
  return (
    <div className="container border border-black-400 rounded-md h-[343px] lg:h-[236px] desktop:h-[313px] relative mt-20 lg:mt-[150px]">
      <div className="inset-0 absolute -z-1 rounded-md">
        <img
          src="/icons/backgroundimg.png"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-gradient rounded-md"></div>
      </div>
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-2 xl:gap-28 justify-center  px-7 lg:px-20 z-10">
        <div className="flex flex-col gap-2 text-center lg:text-start">
          <h2 className="font-bold text-2xl desktop:text-5xl">
            Start your free trial today!
          </h2>
          <p className="text-sm xl:text-lg font-normal text-gray-800">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <Button title="Start a Free Trail" className="w-[160px] 2xl:w-[200px]"/>
      </div>
    </div>
  );
}
