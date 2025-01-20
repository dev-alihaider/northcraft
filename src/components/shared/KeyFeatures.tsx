import React from "react";
import blurBg from "../../../public/assets/images/blurBg.webp";
import ContactUs from "./ContactUs";

const KeyFeatures: React.FC = () => {
  return (
    <div
      className="inset-0 bg-cover bg-center  "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(25, 26, 25, 1), rgba(0, 0, 0, 0)),url(${blurBg.src})`,
      }}
    >
      <div className="inset-0 h-full ">
        <div className="large:px-28 md:px-16 sm:px-8 px-2 text-center py-16">
          <h1 className=" font-semibold text-white large:text-6xl lg:text-5xl md:text-4xl text-2xl">
            Leading Way In Residential Construction Works
          </h1>
        </div>
        <ContactUs />
      </div>
    </div>
  );
};

export default KeyFeatures;
