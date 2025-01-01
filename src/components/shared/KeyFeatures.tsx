import React from "react";
import checkCircle from "../../../public/assets/icons/CheckCircle.svg";
import blurBg from "../../../public/assets/images/blurBg.png";
import ContactUs from "./ContactUs";
import { features } from "./constants";

const KeyFeatures: React.FC = () => {
  return (
    <div
      className="inset-0 bg-cover bg-center  "
      style={{
        backgroundImage: `linear-gradient(to  bottom, rgba(25, 26, 25, 1), rgba(0, 0, 0, 0)),url(${blurBg.src})`,
      }}
    >
      <div className="inset-0 h-full ">
        <div className=" py-8  large:px-28  md:px-16  sm:px-8 px-2 text-center ">
          <h1 className=" font-semibold text-white large:text-6xl lg:text-5xl md:text-4xl text-2xl">
            Leading Way In Building & Civil Construction
          </h1>
          <div className="sm:w-auto w-40 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-8 ">
              {features.map((feature, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <img
                    src={checkCircle.src}
                    alt="check circle"
                    height={20}
                    width={20}
                  />
                  <p className="font-medium text-sm sm:text-base lg:text-lg xl:text-2xl text-white sm:whitespace-normal whitespace-nowrap">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactUs />
      </div>
    </div>
  );
};

export default KeyFeatures;
