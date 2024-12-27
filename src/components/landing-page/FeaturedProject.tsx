'use client'
import React, {useState} from 'react';
import blackDot from "../../../public/assets/icons/BlackDot.svg";
import {images, steps} from "../../utils/Constant";
import "react-multi-carousel/lib/styles.css";
import Carousels from "../../components/landing-page/Carousels";
import {Image} from "../../utils/types";

const FeaturedProject: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string>("All Works");
    const [img, setImg] = useState<Image[]>(images);
    const buttons = ["All Works", "Construction", "Architecture", "Building", "Renovations", "Interior",];

    const handleButtonClick = (label: string) => {
        setActiveButton(label);
        if (label === "All Works") {
            setImg(images);
        } else {
            const filteredImages = images.filter((image) => image.category === label);
            setImg(filteredImages);
        }
    };
    return (<div className="bg-blue">

            <div className="lg:px-28 sm:px-16 ">
                <div
                    className="grid lg:px-28 sm:px-16 sm:grid-cols-4 grid-cols-1 sm:gap-6 pt-10 pb-2 px-4 text-darkGray font-medium lg:text-xl text-sm sm:overflow-auto overflow-hidden"
                >
                    {steps.map(({title}, index: number) => (<div
                        key={index}
                        className="sm:ml-0 ml-3 sm:border-l-0 border-l-2  border-black   sm:border-none flex flex-col sm:text-center sm:items-center sm:justify-between justify-start"
                    >
                        <div className="sm:px-0 px-5">{title}</div>
                        <div
                            className="sm:px-0 px-6  font-medium lg:text-sm text-xs min-mt-3 mt-auto">Step {index + 1}</div>
                        <img src={blackDot.src} alt="dot" className="w-9 h-9 sm:-ml-0 -ml-[19px] sm:-mb-0 -mb-2"/>
                    </div>))}
                </div>

                <div>
                    <div className="sm:hidden block border-l-2 border-red-500 w-9 h-full mt-10 mx-8"></div>

                    <div className="hidden sm:block">
                        <hr className="border-black border-2 -mt-7"/>
                    </div>
                </div>


            </div>
            <div className="flex sm:flex-row flex-col items-center sm:pt-16 py-2 large:px-28 lg:px-20 sm:px-12 px-6">
                <div className=" font-semibold large:text-5xl text-4xl sm:text-left text-center sm:w-1/3 ">Featured
                    Project
                </div>
                <div
                    className=" flex gap-2 sm:ml-auto pl-4 font-semibold large:text-lg text-base sm:text-left text-center text-white flex-wrap">

                    {buttons.map((label) => (<button
                        key={label}
                        onClick={() => handleButtonClick(label)}
                        className={` ${activeButton === label ? "text-black" : ""}`}
                    >
                        {label}
                    </button>))}
                </div>
            </div>

            <Carousels images={img}/>
<div className="font-semibold text-xl w-full text-end">Explore All Projects</div>

        </div>


    );
}

export default FeaturedProject;