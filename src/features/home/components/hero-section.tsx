"use client";

import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import getHeroSectionOption from "../query-options/get-hero-section-option";
import Image from "next/image";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1650513737590-4a00deeddc7a?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PROFILE_SRC =
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HeroSection = () => {
  const { data } = useSuspenseQuery(getHeroSectionOption);
  return (
    <div className="pb-16">
      <div className="aspect-[1216/600] relative">
        <Image
          src={IMAGE_SRC}
          width={640}
          height={426}
          className="size-full object-cover rounded-xl"
          alt="hero-image"
          priority
        />
        <div className="bg-[rgba(20,22,36,0.4)] size-full absolute top-0 start-0 rounded-xl" />
        <div className="bg-white absolute -bottom-16 start-16 w-1/2 shadow-[0_12px_24px_-6px_rgb(24_26_42_/_12%)] p-10 rounded-xl">
          <div className="bg-[#4B6BFB] rounded-md text-white text-sm px-2.5 py-1 w-fit mb-4">
            Technology
          </div>
          <div className="mb-6 text-[#181A2A] text-4xl font-semibold line-clamp-3">
            {data.title}
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={PROFILE_SRC}
              width={36}
              height={36}
              className="size-9 object-cover rounded-full"
              alt="profile-image"
              priority
            />
            <div className="text-[#97989F] text-base font-medium">
              Jason Francisco
            </div>
            <div className="text-[#97989F] text-base font-normal">
              August 20, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
