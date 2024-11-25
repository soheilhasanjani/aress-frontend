"use client";

import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import getHeroSectionOption from "../query-options/get-hero-section-option";

const HeroSection = () => {
  const { data } = useSuspenseQuery(getHeroSectionOption);
  console.log(data);
  return <div></div>;
};

export default HeroSection;
