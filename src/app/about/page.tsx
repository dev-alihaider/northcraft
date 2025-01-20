import React from "react";
import EngineeringStandards from "../../components/about/EngineeringStandards";
import GoalVision from "../../components/about/GoalVision";
import ProjectsShowcase from "../../components/shared/ProjectsShowcase";
import ImageGallery from "../../components/about/ImageGallary";

const Page: React.FC = () => {
  return (
    <>
      <GoalVision />
      <ImageGallery />
      <ProjectsShowcase />
      <EngineeringStandards />
    </>
  );
};

export default Page;
