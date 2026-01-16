import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3 ">
      <div className="flex flex-col md:flex--row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-300">
        {/* 1st column section */}
        <div className="">
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6 ">
            {" "}
            NeuroBlog is your intelligent writing companion. We combine AI
            technology with creativity to help you craft meaningful stories,
            share ideas, and explore new perspectives effortlessly.
          </p>
        </div>
      </div>

      {/* copyright section */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80 ">&copy; {new Date().getFullYear()} NeuroBlog - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
