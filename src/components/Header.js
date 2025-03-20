"use client";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container py-[30px] flex justify-between items-center">
      <Link href="/" className="cursor-pointer">
        <img
          src="/icons/logo.svg"
          alt="logo"
          className="w-36 sm:w-40 md:w-42 lg:w-48 xl:w-56 "
        />
      </Link>
      <div className="flex items-center justify-center bg-black-500 rounded-md lg:hidden cursor-pointer w-11 h-11">
        <img src="/icons/hamburger-menu.svg" />
      </div>
      <Navbar />
      <div className="hidden lg:flex flex-row items-center gap-[30px]">
        <button className="cursor-pointer p-4 bg-transparent hover:bg-black-500 rounded-md">
          <img src="/icons/search.svg" alt="search" />
        </button>
        <button className="cursor-pointer p-4 bg-transparent hover:bg-black-500 rounded-md">
          <img src="/icons/notification.svg" alt="notification" />
        </button>
      </div>
    </div>
  );
}
