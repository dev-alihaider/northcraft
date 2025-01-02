"use client";
import React from "react";
import carcrop from "../../../public/assets/images/crop2.jpeg";
import northcraftMan from "../../../public/assets/images/northcraftMan.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GoalVision: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div>
        <div className="relative w-full ">
          <img
            src={carcrop.src}
            alt="Image"
            className="w-full h-full object-cover object-center -mt-36"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60">

          </div>
        </div>
        <div className="bg-darkGray">
          <div
            className="grid grid-cols-1 large:px-24 w-full lg:px-16 md:px-12 px-6  lg:py-28 md:py-16 py-12 items-center md:grid-cols-3"
            ref={ref}
          >
            <motion.div
              className="md:col-span-2 md:pr-10 mb-8 md:mb-0"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 50, damping: 10 }}
            >
              <div className="md:pr-10 mb-8 md:mb-0 min-w-1/2 md:grid md:col-span-2">
                <div className="flex sm:flex-col flex-row sm:justify-start justify-center sm:gap-0 gap-1">
                  <h1 className="font-semibold text-blue large:text-6xl md:text-4xl text-2xl">
                    Our Goal
                  </h1>
                  <h1 className="font-semibold text-blue  large:text-6xl md:text-4xl text-2xl">
                    To The Better
                  </h1>
                </div>
                <p className="font-normal large:text-xl lg:text-lg md:text-base text-sm text-white pt-6 md:pt-10 sm:text-left text-center">
                  Stephen has over 12 years experience in the building industry.
                  Doing his apprenticeship in Auckland on villas and heritage
                  homes stephen has gained a vast variety of skills specialising
                  in high end renovations and tricky jobs. From small
                  maintenance jobs to large complicated works Northcraft
                  projects can do it all.
                  <br />
                  <br />
                  Moving to the bay of islands from Riverhead, Stephen has
                  brought his problem solving skills, customer focused attitude
                  and professionalism to the area. Communication and customer
                  satisfaction is a priority for Northcraft projects.
                  <br />
                  <br />
                  When not building Stephen spends his spare time caring for his
                  young daughter or out on the water spearfishing, a passionate
                  member of the spearfishing community Northcraft projects
                  offers sponsorship to local spearfishing events and
                  competitions.
                </p>
              </div>
            </motion.div>
            <div>
              <img
                src={northcraftMan.src}
                alt="car"
                className="md:w-96 lg:ml-12"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalVision;
