import React from "react";
import worker from "../../../public/assets/images/workerCroped.png";
import car from "../../../public/assets/images/car.png";
import buliding from "../../../public/assets/icons/building.svg";
import drilling from "../../../public/assets/icons/drilling.svg";

function OurGoal() {
  return (
    <>
      <div>
        <img src={worker.src} alt="workers" className="w-full" />
        <div className="bg-darkGray">
          <div className="grid grid-cols-1 large:px-24 w-full lg:px-16 md:px12 px-8 large:pt-28 lg:pt-20 md:pt-16  pt-12   items-center md:grid-cols-2">
            <div className="md:pr-10 mb-8 md:mb-0 min-w-1/2">
              <div className="font-semibold  text-blue large:text-6xl  text-4xl">
                Our Goal
              </div>
              <div className="font-semibold  text-blue  large:text-6xl  text-4xl">
                To The Better
              </div>
              <p className="font-normal large:text-xl lg:text-lg text-base text-white pt-6 md:pt-10">
                Stephen has over 12 years experience in the building industry.
                Doing his apprenticeship in Auckland on villas and heritage
                homes, Stephen has gained a vast variety of skills specializing
                in high-end renovations and tricky jobs. From small maintenance
                jobs to large complicated works, Northcraft projects can do it
                all. Moving to the Bay of Islands from Riverhead, Stephen has
                brought his problem-solving skills, customer-focused attitude,
                and professionalism to the area. Communication and customer
                satisfaction is a priority for Northcraft projects.
              </p>
            </div>
            <img src={car.src} alt="car" className="w-auto " />
          </div>

          <div className="text-white flex overflow-x-auto overflow-hidden gap-16 pt-16 pl-24 pb-4">
            <img src={buliding.src} alt="building" className="w-32 h-32" />
            <img src={drilling.src} alt="drilling icon" className="w-32 h-32" />
            <img src={buliding.src} alt="building" className="w-32 h-32" />
            <img src={drilling.src} alt="drilling icon" className="w-32 h-32" />
            <img src={buliding.src} alt="building" className="w-32 h-32" />
            <img src={drilling.src} alt="drilling icon" className="w-32 h-32" />
            <img src={buliding.src} alt="building" className="w-32 h-32" />
            <img src={drilling.src} alt="drilling icon" className="w-32 h-32" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurGoal;
