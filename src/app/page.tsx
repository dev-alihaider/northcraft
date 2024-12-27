import React from "react";
import IntroPage from "../components/landing-page/IntroPage";
import TotalProjects from "../components/landing-page/TotalProjects";
import Card from "../components/landing-page/Card";
import ClientReview from "../components/landing-page/ClientReview";
import CivilConstruction from "../components/landing-page/CivilConstruction";
import FeaturedProject from "../components/landing-page/FeaturedProject";

const Home: React.FC = () => {
  return (
    <>
      <IntroPage />
      <Card />
      <TotalProjects />
      <FeaturedProject />
      <ClientReview />
      <CivilConstruction />
    </>
  );
};

export default Home;
