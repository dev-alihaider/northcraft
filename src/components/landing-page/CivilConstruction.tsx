import React from "react";
import checkCircle from "../../../public/assets/icons/CheckCircle.svg";
import blurBg from "../../../public/assets/images/blurBg.png";
import ContactUs from "./ContactUs";

const CivilConstruction: React.FC = () => {
  return (
    <div
      className="inset-0 bg-cover bg-center  "
      style={{
        backgroundImage: `linear-gradient(to  bottom, rgba(25, 26, 25, 1), rgba(0, 0, 0, 0)),url(${blurBg.src})`,
      }}
    >
      <div className="inset-0 h-full ">
        <div className=" py-8 p large:px-28  md:16  px-8 text-center ">
          <h1 className=" font-semibold text-white large:text-6xl lg:text-5xl md:text-4xl text-3xl">
            Leading Way In Building & Civil Construction
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-8">
            <div className="flex items-center gap-2 sm:justify-center">
              <img
                src={checkCircle.src}
                alt="check circle"
                height={20}
                width={20}
              />
              <p className="font-medium text-sm sm:text-base lg:text-lg xl:text-2xl text-white">
                Professional Staff
              </p>
            </div>
            <div className="flex items-center gap-2 sm:justify-center">
              <img
                src={checkCircle.src}
                alt="check circle"
                height={20}
                width={20}
              />
              <p className="font-medium text-sm sm:text-base lg:text-lg xl:text-2xl text-white">
                100% Satisfaction
              </p>
            </div>
            <div className="flex items-center gap-2 sm:justify-center">
              <img
                src={checkCircle.src}
                alt="check circle"
                height={20}
                width={20}
              />
              <p className="font-medium text-sm sm:text-base lg:text-lg xl:text-2xl text-white">
                Accurate Testing
              </p>
            </div>
            <div className="flex items-center gap-2 sm:justify-center">
              <img
                src={checkCircle.src}
                alt="check circle"
                height={20}
                width={20}
              />
              <p className="font-medium text-sm sm:text-base lg:text-lg xl:text-2xl text-white">
                Transparent Pricing
              </p>
            </div>
          </div>
        </div>
        <ContactUs />
      </div>
    </div>
  );
}

export default CivilConstruction;
