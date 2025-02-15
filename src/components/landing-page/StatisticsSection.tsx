"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoImg from "../../../public/assets/images/NorthcraftLogo.webp";

const StatisticsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className="bg-darkGray overflow-x-hidden">
        <div
          className="grid lg:grid-cols-5 md:grid-cols-5 w-full md:px-0 px-5 large:py-28 py-12"
          ref={ref}
        >
          <div className="md:grid lg:col-span-2 md:col-span-2 hidden large:items-end items-center justify-center">
            <img
              src={logoImg.src}
              alt="Northcraft logo"
              className="w-full object-cover"
            />
          </div>
          <motion.div
            className="md:grid lg:col-span-3 md:col-span-3 text-white sm:pl-0"
            initial={{ x: "100vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          >
            <div className="md:grid lg:col-span-3 md:col-span-3 text-white sm:pl-0">
              <div className="font-semibold sm:p-4 block justify-center">
                <h2 className="text-blue sm:text-left text-center large:text-6xl lg:text-5xl sm:text-4xl text-2xl">
                  12 years&nbsp;
                  <span className="text-white md:mt-5 sm:sm:mt-2">
                    of experience!
                  </span>
                </h2>

                <div className="sm:pr-16 mt-3 large:mt-10 lg:mt-5">
                  <p className="large:text-lg sm:text-base text-sm sm:text-left text-center font-normal">
                    We have a team of experienced professionals who have been in the industry for over 12 years, serving clients in Waipapa, Far North, and the surrounding areas. Our contractors have a wealth of knowledge and skills, making them experts in their field.
                    <br />
                    <br />
                    With 12 years of experience, our contractors have a deep
                    understanding of industry standards and regulations. We
                    ensure that all our projects comply with the latest safety
                    and building codes, and that the final product meets or
                    exceeds our client&apos;s expectations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StatisticsSection;
