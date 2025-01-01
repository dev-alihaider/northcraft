"use client";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import blackDot from "../../../public/assets/icons/BlackDot.svg";
import FeaturedCarousel from "./FeaturedCarousel";
import { Image } from "../../utils/types";
import Button from "../common/Button";
import { buttons, steps } from "./constants";
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
    <div className="bg-blue py-8">
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
      <div className="lg:px-28 sm:px-16 ">
        <div className="sm:grid hidden pb-4 lg:px-28 sm:px-16 sm:grid-cols-4 grid-cols-1 sm:gap-6 pt-10 sm:pb-2 px-4 text-darkGray font-medium lg:text-xl text-sm sm:overflow-auto overflow-hidden ">
          {steps.map(({ title }, index: number) => (
            <div
              key={index}
              className={`${index !== 0 ? "border-l-2 border-black" : ""} text-center sm:ml-0 ml-3 sm:border-l-0 border-black sm:border-none flex flex-col sm:text-center sm:items-center sm:justify-between justify-start`}
            >
              <div className="">{title}</div>
              <div className="sm:px-0 px-6  font-medium lg:text-sm text-xs min-mt-3 mt-auto">
                Step {index + 1}
              </div>
              <img
                src={blackDot.src}
                alt="dot"
                className="w-9 h-9 sm:-ml-0 -ml-[19px] sm:-mb-0 -mb-[10px]"
              />
            </div>
          ))}
        </div>
        <div>
          <div className="sm:hidden block w-9 h-full pt-10 mx-8"></div>
          <div className="hidden sm:block">
            <hr className="border-black border-2 -mt-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
