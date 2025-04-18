import React from "react";

export default function HomeBackground() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0 min-w-screen h-[500px] md:h-[636px] 2xl:h-[860px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] md:h-[636px] 2xl:h-[860px] z-10 pointer-events-none bg-gradient-home" />
      <div className=" flex flex-col gap-5 ">
        {[
          "/images/ImageContainer3.png",
          "/images/ImageContainer.png",
          "/images/ImageContainer1.png",
          "/images/ImageContainer2.png",
        ].map((src, index) => (
          <div
            key={index}
            className="w-full overflow-hidden flex justify-center"
          >
            <img
              src={src}
              className="min-w-[1280px] max-w-none h-auto object-cover"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
