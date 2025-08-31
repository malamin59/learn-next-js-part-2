"use client";
import React from "react";
import Image from "next/image";
import { FaBolt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import myImage from "../../../public/myPhoto.png";
import epv from "../../../public/epb.png";

export default function About() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-sky-800 text-white rounded-2xl shadow-lg p-14 flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto mt-10 overflow-hidden">
    <div className="absolute -mt-32 opacity-90">
  <Image 
    src={epv} 
    alt="Logo" 
    width={70} 
    height={70} 
    className="rounded-full object-cover" 
  />
</div>

      {/* Left Content */}
      <div className="flex-1 space-y-1 md:ml-22 relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold">AL AMIN PATWARY</h1>
        <p className="text-lg font-semibold">
          MERN Stack Developer | React | Tailwind CSS | Node.js | MongoDB
        </p>

        {/* Tech Icons */}
        <div className="flex items-center gap-5 text-2xl">
          <SiReact className="text-cyan-400" />
          <SiTailwindcss className="text-sky-400" />
          <SiMongodb className="text-green-500" />
          <SiNodedotjs className="text-green-600" />
          <SiJavascript className="text-yellow-400" />
          <SiHtml5 className="text-orange-500" />
          <SiCss3 className="text-blue-500" />
        </div>

        {/* Contact Info */}
        <div className="space-y-1 text-sm md:text-base">
          <p className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" /> +8801882412260
          </p>
          <p className="flex items-center gap-2">
            <IoMdGlobe className="text-sky-300" /> Bangladesh
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-red-400" /> mizialamin476@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaBolt className="text-orange-400" /> Passionate about building
            modern web apps
          </p>
        </div>
      </div>

      {/* Right Side (Profile Image) */}
      <div className="w-32 h-32 md:w-46 md:h-46 rounded-full overflow-hidden border-2 border-white shadow-md relative z-10">
        <Image
          src={myImage}
          alt="Al-Amin Patwary"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
