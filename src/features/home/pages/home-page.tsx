import React from "react";
import AdsBanner from "../components/ads-banner";
import LatestPostRSC from "../components/latest-post-rsc";
import HeroSectionRSC from "@/features/home/components/hero-section-rsc";

const HomePage = () => {
  return (
    <main className="container">
      <HeroSectionRSC />
      <div className="h-20" />
      <AdsBanner />
      <div className="h-20" />
      <LatestPostRSC />
      <div className="h-20" />
      <AdsBanner />
      <div className="h-20" />
    </main>
  );
};

export default HomePage;
