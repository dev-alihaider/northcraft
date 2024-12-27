import React from "react";

const EngineeringExcellence: React.FC = () => {
  return (
    <>
      <div className="bg-blue">
        <div className="grid grid-cols-1 lg:grid-cols-2 large:px-24 lg:px-16 md:px-12 px-8 md:pb-20 w-full large:pt-20 lg:pt-16 md:pt-12 pt-10 items-center">
          <img
            src="/images/house.png"
            alt="car"
            className="w-auto mx-auto mb-8 lg:mb-0 large:pr-12 lg:pr-8 md:pr-6"
          />

          <div className="my-8 md:my-0 min-w-1/2 h-full pt-8 lg:pt-0">
            <div className="font-semibold large:text-6xl text-3xl text-center lg:text-left">
              Engineering Excellence
            </div>
            <div className="font-semibold pt-2 large:text-6xl text-3xl text-center lg:text-left">
              In Construction
            </div>
            <p className="font-normal large:text-xl lg:text-lg text-base pt-6 md:pt-10 text-center lg:text-left leading-relaxed">
              When not building, Stephen spends his spare time caring for his
              young daughter or out on the water spearfishing. A passionate
              member of the spearfishing community, Northcraft Projects offers
              sponsorship to local spearfishing events and competitions.
            </p>

            <div className="pt-5 sm:flex grid md:pt-6 sm:pt-8 sm:gap-6 max-w-full lg:justify-start justify-center">
              <div className="flex items-center gap-2">
                <span className="font-semibold large:text-5xl text-3xl">
                  25+
                </span>
                <p className="large:text-sm text-xs sm:w-16">
                  Years of Experience
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold large:text-5xl text-3xl">
                  378+
                </span>
                <p className="large:text-sm text-xs sm:w-16">
                  Projects Completed
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold large:text-5xl text-3xl">
                  69+
                </span>
                <p className="large:text-sm text-xs sm:w-24">
                  Winning Global Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EngineeringExcellence;
