"use client";
import React, { useState } from "react";
import ChevronLeft from "../../../public/assets/icons/ChevronLeft.svg";
import ChevronRight from "../../../public/assets/icons/ChevronRight.svg";
import { clientData } from "./constants";

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % clientData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex: number) => (prevIndex - 1 + clientData.length) % clientData.length,
    );
  };

  return (
    <div className="py-12 text-white text-center bg-darkGray">
      <div className="lg:px-72 md:px-48 sm:px-32 px-6 h-60 md:h-72 sm:h-80">
        <h1 className="font-semibold text-blue sm:text-3xl text-xl  ">
          What Our Client Says
        </h1>
        <p className="pt-7 font-normal sm:text-lg text-sm">
          {clientData[currentIndex].review}
        </p>
        <p className="pt-4 font-medium sm:text-xl text-sm">
          {clientData[currentIndex].name}
        </p>
        <p className="pt-1 font-medium sm:text-base text-xs">
          &nbsp;
          {clientData[currentIndex].role}
        </p>
      </div>

      <div className="flex items-center justify-center sm:gap-5 gap-2 py-4">
        <div className="flex items-center cursor-pointer" onClick={handlePrev}>
          <img src={ChevronLeft.src} alt="chevron" />
          <p className="sm:text-base text-sm">Prev</p>
        </div>

        <div className=" rounded-full ">
          <img
            src={
              clientData[
                (currentIndex - 1 + clientData.length) % clientData.length
              ].image
            }
            alt="client"
            className="md:h-16 md:w-16 sm:h-12 sm:w-12 h-8 w-8 rounded-full object-cover opacity-50"
          />
        </div>
        <div className=" rounded-full p-1.5 bg-blue">
          <div className=" rounded-full p-2.5 bg-darkGray ">
            <img
              src={clientData[currentIndex].image}
              alt="client"
              className="md:h-20 md:w-20 sm:h-16 sm:w-16 h-12 w-12 rounded-full object-cover"
            />
          </div>
        </div>
        <div className=" rounded-full ">
          <img
            src={clientData[(currentIndex + 1) % clientData.length].image}
            alt="client"
            className="md:h-16 md:w-16 sm:h-12 sm:w-12 h-8 w-8 rounded-full object-cover opacity-50"
          />
        </div>
        <div className="flex items-center cursor-pointer" onClick={handleNext}>
          <p className="sm:text-base text-sm">Next</p>
          <img src={ChevronRight.src} alt="chevron" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
