import React from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/configs/react-query";
import HeroSection from "./hero-section";
import getHeroSectionOption from "../query-options/get-hero-section-option";

const HeroSectionRSC = () => {
  //
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getHeroSectionOption);
  //
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HeroSection />
    </HydrationBoundary>
  );
};

export default HeroSectionRSC;
