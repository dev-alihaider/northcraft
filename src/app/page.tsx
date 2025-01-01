import React from "react";
import HeroSection from "../components/landing-page/HeroSection";
import StatisticsSection from "../components/landing-page/StatisticsSection";
import FeatureListCard from "../components/landing-page/FeatureListCard";
import KeyFeatures from "../components/shared/KeyFeatures";
import ImageGallery from "../components/about/ImageGallary";
import ProjectsShowcase from "../components/shared/ProjectsShowcase";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeatureListCard />
      <StatisticsSection />
      <ImageGallery />
      <ProjectsShowcase />
      <KeyFeatures />
    </>
  );
};

export default Home;
