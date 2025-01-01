"use client"
import arrow from "../../../public/assets/icons/arrow-right-circle.svg";
import Button from "../../components/common/Button";
import Link from "next/link";
import React from "react";
import carFull from "../../../public/assets/images/carFull.jpeg";
import  {motion, } from "framer-motion";

const HeroSection: React.FC = () => {
    return (<>
        <div
            className="bg-cover bg-no-repeat bg-bottom sm:justify-center justify-end -mt-36 min-h-screen overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to  bottom, rgba(25, 26, 25, 1), rgba(0, 0, 0, 0)),url(${carFull.src})`,
            }}
        >
            <motion.div
                initial={{x: "-100vw"}}
                animate={{x: 0}}
                transition={{type: "spring",stiffness:50,damping:10 }}
            >
                <div className="md:px-28 sm:px-20 py-48 px-6 text-white">
                    <h1 className="text-6xl font-semibold text">We Prepare</h1>
                    <p className="text-6xl font-semibold">
                        For The <span className="text-blue">Future</span>
                    </p>
                    <p className="text-xl pt-6 ">
                        We provide the best architectural design, construction, and <br/>
                        building maintenance services for you.
                    </p>
                    <div className="pt-16 ">
                        <Link href="/service">
                            <Button
                                className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center gap-2 sm:py-4 py-2 sm:px-6 px-4 rounded-xl bg-blue text-darkGray sm:text-2xl text-xl font-medium">
                                <span>Our Services</span>
                                <img
                                    src={arrow.src}
                                    alt="right arrow"
                                    className="sm:w-6 sm:h-6 w-4 h-4"
                                />
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    );
}

export default HeroSection;