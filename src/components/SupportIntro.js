import React from "react";

export default function SupportIntro() {
  return (
    <div className="min-w-[357px] w-full lg:w-[357px] xl:w-[430px] 2xl:w-[533px] flex flex-col gap-7 lg:gap-10 2xl:gap-12">
      <div className="flex flex-col gap-2 2xl:gap-3">
        <h2 className="text-white font-bold text-3xl lg:text-4xl 2xl:text-5xl   ">
          Welcome to our support page!
        </h2>
        <p className="global-text">
          We&apos;re here to help you with any problems you may be having with
          our product.
        </p>
      </div>
      <div className="w-full border-[6px] border-black-400 rounded-md  ">
        <img src="/images/group.png" className="w-full h-auto max-h-[420px] " alt="poster-image" />
      </div>
    </div>
  );
}
