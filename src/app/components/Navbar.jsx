"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  if (!pathName.includes("dashboard")) {
    return (
      <div className="w-full mb bg-base-100 bg-gray-200 text-sky-500 shadow-sm fixed top-0 z-50 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  lg:hidden rounded-box z-1 mt-3  p-2 shadow"
            >
              <li>
                <Link href={"/"}> Home</Link>
              </li>
              <li>
                <Link href={"/about"}> About </Link>
              </li>
              <li>
                <Link href={"/services"}> Services </Link>
              </li>
              <li>
                <Link href={"/"}> Contact</Link>
              </li>
              <li>
                <Link href={"/posts"}> Posts</Link>
              </li>
              <li>
                <Link href={"/meals"}> Meals</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* desktop mood  */}
        <div className="navbar-center  hidden  justify-center mt-2   lg:flex">
          <ul className="menu menu-horizontal gap-12  flex px-1">
            <li>
              <Link href={"/"}> Home</Link>
            </li>
            <li>
              <Link href={"/about"}> About </Link>
            </li>
            <li>
              <Link href={"/services"}> Services </Link>
            </li>
            <li>
              <Link href={"/posts"}> Posts</Link>
            </li>
            <li>
              <Link href={"/meals"}> Meals</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
