import React from "react";
import engineerImg from "../../../public/assets/images/engineer.png";

function OurEngineer() {
  return (
    <>
      <div className="bg-darkGray">
        <div className="large:p-24 lg:p-20 p-12">
          <div className="w-full justify-center">
            <h1 className="font-semibold large:text-6xl text-4xl text-white text-center">
              Meet Our Engineers
            </h1>
          </div>
          <div className="gap-12 md:gap-8 sm:gap-4 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-12 w-full justify-center items-center">
            <div className="text-center text-white flex flex-col justify-center items-center w-full">
              <img
                className="max-w-full h-auto"
                src={engineerImg.src}
                alt="Engineer"
              />
              <p className="font-normal text-xl sm:text-lg pt-4 text-liteGray">
                Engineer
              </p>
              <p className="font-semibold text-4xl sm:text-2xl">
                Sofia Camalia
              </p>
            </div>
            <div className="text-center text-white flex flex-col justify-center items-center w-full">
              <img
                className="max-w-full h-auto"
                src={engineerImg.src}
                alt="Engineer"
              />
              <p className="font-normal text-xl sm:text-lg pt-4 text-liteGray">
                Engineer
              </p>
              <p className="font-semibold text-4xl sm:text-2xl">
                Sofia Camalia
              </p>
            </div>
            <div className="text-center text-white flex flex-col justify-center items-center w-full">
              <img
                className="max-w-full h-auto"
                src={engineerImg.src}
                alt="Engineer"
              />
              <p className="font-normal text-xl sm:text-lg pt-4 text-liteGray">
                Engineer
              </p>
              <p className="font-semibold text-4xl sm:text-2xl">
                Sofia Camalia
              </p>
            </div>
            <div className="text-center text-white flex flex-col justify-center items-center w-full">
              <img
                className="max-w-full h-auto"
                src={engineerImg.src}
                alt="Engineer"
              />
              <p className="font-normal text-xl sm:text-lg pt-4 text-liteGray">
                Engineer
              </p>
              <p className="font-semibold text-4xl sm:text-2xl">
                Sofia Camalia
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurEngineer;
