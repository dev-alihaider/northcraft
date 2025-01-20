"use client";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import FeaturedCarousel from "./FeaturedCarousel";
import { Image } from "../../utils/types";
import Button from "../common/Button";
import { buttons } from "./constants";
import { carouselsImages } from "../../utils/constants";

const ProjectsShowcase: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("All Works");
  const [images, setImages] = useState<Image[]>(carouselsImages);

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
    if (label === "All Works") {
      setImages(carouselsImages);
    } else {
      const filteredImages = carouselsImages.filter(
        (image) => image.category === label,
      );
      setImages(filteredImages);
    }
  };

  return (
    <div className="bg-blue py-10">
      <div className="flex sm:flex-row flex-col items-center sm:pt-34 py-2 large:px-28 lg:px-20 sm:px-12 px-6">
        <div className=" font-semibold large:text-5xl text-3xl sm:pl-12 sm:pb-0 pb-2 sm:text-left text-center sm:w-1/3 ">
          Featured Project
        </div>
        <div className=" flex gap-2 sm:ml-auto pl-4 font-semibold large:text-lg text-base sm:text-left justify-center text-center text-white flex-wrap">
          {buttons.map((label, i: number) => (
            <Button
              key={i}
              onClick={() => handleButtonClick(label)}
              className={`transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${activeButton === label ? "text-black" : ""}`}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <FeaturedCarousel images={images} />
    </div>
  );
};

export default ProjectsShowcase;
