"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();

  if (pathName.includes("dashboard")) return null;

  return (
    <div className="navbar bg-base-100 shadow-sm   fixed top-0 z-50 px-4 w-full mx-auto">
      {/* Left side (Logo + Mobile Dropdown) */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div >
          <ul
            tabIndex={0}
            className=" grid  lg:grid-cols-10 grid-cols-5 justify-baseline mx-auto lg:gap-8  bg-base-100 rounded-box p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/products/add">Add Product</Link>
            </li>
            <li>
              <Link href="/register">Resister</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
