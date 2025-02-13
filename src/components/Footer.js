import React from "react";
import FooterMenu from "./FooterMenu";
import {
  homeData,
  moviesData,
  showsData,
  subData,
  supportData,
} from "@/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black-800 mt-[120px]">
      <div className="container">
        <div className="py-20 grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full items-start ">
          <FooterMenu menuData={homeData} className="text-start" />
          <FooterMenu menuData={moviesData} className="text-start" />
          <FooterMenu menuData={showsData} className="text-start" />
          <FooterMenu menuData={supportData} className="text-start" />
          <FooterMenu menuData={subData} className="text-start" />
          <div className="text-start">
            <span className="text-white text-lg font-bold">
              Contact With Us
            </span>
            <div className="flex gap-3 mt-5">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="link-border"
              >
                <img src="/icons/facebook.svg" />
              </Link>
              <Link
                href="https://x.com/"
                target="_blank"
                className="link-border"
              >
                <img src="/icons/twitter.svg" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/firdes-oya/"
                target="_blank"
                className="link-border transition-opacity duration-300 hover:opacity-70"
              >
                <img src="/icons/linkedin.svg" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-black-500 " />
        <div className="my-5 font-normal text-sm text-gray-800 flex flex-col gap-5 md:flex-row items-start justify-between w-full">
          <span>@2023 streamvib, All Rights Reserved</span>
          <div className="flex flex-row gap-5">
            <Link href="/" className="hover:underline">
              Terms of Use
            </Link>
            <span className="border-l border-l-black-400"></span>
            <Link href="/" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="border-l border-l-black-400"></span>
            <Link href="/" className="hover:underline">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
