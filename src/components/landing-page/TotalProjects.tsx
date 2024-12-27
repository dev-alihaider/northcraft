import React from "react";
import worker from "../../../public/assets/images/transparentBgWorkers.png";

const TotalProjects: React.FC = () => {
  return (
    <>
      <div className="bg-darkGray">
        <div className=" pt-5 sm:flex grid large:px-24 md:px-16 sm:px-8 md:pt-16 sm:pt-8 sm:gap-6 max-w-full sm:justify-start justify-center ">
          <div className="flex items-center gap-2 ">
            <span className="font-semibold text-5xl text-blue ">25+</span>
            <p className="text-white text-sm sm:w-16">Years of Experience</p>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="font-semibold text-5xl text-blue ">378+</span>
            <p className="text-white text-sm sm:w-16 ">Project Complete</p>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="font-semibold text-5xl text-blue ">69+</span>
            <p className="text-white text-sm sm:w-24">Winning Global Award</p>
          </div>
        </div>

        <div className="grid large:grid-cols-5 lg:grid-cols-6 md:grid-cols-5 w-full md:px-0 px-5">
          <div className="md:grid large:col-span-2 lg:col-span-3 md:col-span-2 hidden w-full h-auto bg-fill large:items-end items-center justify-center">
            <img
              src={worker.src}
              alt="worker logo"
              className="w-full object-cover"
            />
          </div>

          <div className="md:grid md:col-span-3 text-white large:pt-28 pt-12 sm:pl-0 pl-6">
            <div className="font-semibold sm:p-4 p-4">
              <h1 className="text-blue sm:text-left large:text-6xl lg:text-5xl text-4xl">
                25 years
              </h1>

              <h1 className="sm:mt-5 mt-2 sm:text-left large:text-6xl lg:text-5xl text-4xl">
                of experience!
              </h1>
            </div>

            <div className="sm:pr-16 mt-3 large:mt-10 lg:mt-5 sm:p-4 pr-8">
              <p className="large:text-lg lg:text-base font-normal">
                We have a team of experienced professionals who have been in the
                industry for over 25 years. Our contractors have a wealth of
                knowledge and skills that they have acquired over the years,
                making them experts in their field.
                <br />
                <br />
                With 25 years of experience, our contractors have a deep
                understanding of industry standards and regulations. We ensure
                that all our projects comply with the latest safety and building
                codes, and that the final product meets or exceeds our
                client&apos;s expectations.
              </p>
            </div>

            <div className=" large:mt-10 mt-6 sm:p-4 p-4">
              <p className="text-7xl font-normal font-comforter">jhon lbf</p>
              <p className="text-sm font-medium py-2 mt-4 mb-8">
                Henry Kurnia Adhi - Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalProjects;
