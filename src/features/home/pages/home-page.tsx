import React from "react";
import AdsBanner from "../components/ads-banner";
import LatestPost from "../components/latest-post";
import HeroSectionRSC from "@/features/home/components/hero-section-rsc";

const HomePage = () => {
  return (
    <main className="container">
      <HeroSectionRSC />
      <AdsBanner />
      <LatestPost />
      <AdsBanner />
    </main>
  );
};

export default HomePage;
