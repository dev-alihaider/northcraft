"use client"
import React from "react";
import worker from "../../../public/assets/images/transparentBgWorkers.png";
import {statistics} from "../../utils/Constants";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const StatisticsSection: React.FC = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <>
            <div className="bg-darkGray overflow-x-hidden">
                <div ref={ref} >
                    <motion.div
                        initial={{x: "-100vw", opacity: 0}}
                        animate={inView ? {x: 0, opacity: 1} : {}}
                        transition={{type: "spring", stiffness: 50, damping: 10}}
                    >
                        <div
                            className="pt-5 sm:flex grid large:px-24 md:px-16 sm:px-8 md:pt-16 sm:pt-8 sm:gap-6 max-w-full sm:justify-start justify-center">
                            {statistics.map((stat, index) => (
                                <div className="flex items-center gap-2" key={index}>
                                    <span className="font-semibold text-5xl text-blue">{stat.value}</span>
                                    <p className="text-white text-sm sm:w-16">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="grid lg:grid-cols-5  md:grid-cols-5 w-full md:px-0 px-5"  ref={ref}>
                    <div
                        className=" md:grid lg:col-span-2 md:col-span-2 hidden  large:items-end items-center justify-center">
                        <img
                            src={worker.src}
                            alt="worker logo"
                            className="w-full object-cover"
                        />
                    </div>
                    <motion.div
                        className="md:grid lg:col-span-3 md:col-span-3 text-white   sm:pl-0"
                        initial={{x: "100vw", opacity: 0}}
                        animate={inView ? {x: 0, opacity: 1} : {}}
                        transition={{type: "spring", stiffness: 50, damping: 10}}
                    >
                        <div className="md:grid lg:col-span-3 md:col-span-3 text-white large:pt-28 pt-12 sm:pl-0">
                            <div className="font-semibold sm:p-4 block justify-center">
                                <h1 className="text-blue sm:text-left text-center large:text-6xl lg:text-5xl sm:text-4xl text-2xl">
                                    12 years{" "}
                                    <span className="text-white md:mt-5 sm:sm:mt-2">
                                    of experience!
                                </span>
                                </h1>

                                <div className="sm:pr-16 mt-3 large:mt-10 lg:mt-5">
                                    <p className="large:text-lg sm:text-base text-sm sm:text-left text-center font-normal">
                                        We have a team of experienced professionals who have been in the
                                        industry for over 12 years. Our contractors have a wealth of
                                        knowledge and skills that they have acquired over the years,
                                        making them experts in their field.
                                        <br/>
                                        <br/>
                                        With 12 years of experience, our contractors have a deep
                                        understanding of industry standards and regulations. We ensure
                                        that all our projects comply with the latest safety and building
                                        codes, and that the final product meets or exceeds our
                                        client&apos;s expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default StatisticsSection;
