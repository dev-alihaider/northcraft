import React from "react";

const EngineeringStandards: React.FC = () => {
  return (
    <>
      <div className="bg-blue">
        <div className="grid grid-cols-1 lg:grid-cols-2 large:px-24 lg:px-16 md:px-12 px-8 md:pb-20 w-full large:pt-20 lg:pt-16 md:pt-12 pt-10 items-center">
          <img
            src="/assets/images/house.webp"
            alt="car"
            className="w-auto mx-auto mb-8 lg:mb-0 large:pr-12 lg:pr-8 md:pr-6"
          />

          <div className="my-8 md:my-0 min-w-1/2 h-full pt-8 lg:pt-0">
            <h1 className="font-semibold large:text-6xl text-3xl text-center lg:text-left">
              Engineering Excellence
            <div className="font-semibold pt-2 large:text-6xl text-3xl text-center lg:text-left">
              In Construction
            </div>
            </h1>
            <p className="font-normal large:text-xl lg:text-lg text-base pt-6 md:pt-10 text-center lg:text-left leading-relaxed">
              When not building, Stephen spends his spare time caring for his
              young daughter or out on the water spearfishing. A passionate
              member of the spearfishing community, Northcraft Projects offers
              sponsorship to local spearfishing events and competitions specially in the Waipapa and Far North area.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngineeringStandards;
