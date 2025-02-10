"use client";
import React, { useState } from "react";
import navbarLinks from "@/config/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex flex-row py-2 px-3 gap-4 outline outline-4 outline-black-500 rounded-md">
      {navbarLinks.map((navlink) => {
        const activeLink = pathname === navlink.path;
        return (
          <Link
            key={navlink.id}
            href={navlink.path}
            className={`${
              activeLink ? "bg-black-600 rounded-md" : "text-gray-400"
            } desktop:text-lg xl:text-sm px-4 py-4 cursor-pointer`}
          >
            {navlink.name}
          </Link>
        );
      })}
    </nav>
  );
}
