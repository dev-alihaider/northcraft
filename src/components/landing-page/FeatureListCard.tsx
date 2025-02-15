import React from "react";
import checkIcon from "../../../public/assets/icons/CheckCircleFill.svg";

const FeatureListCard: React.FC = () => {
  return (
    <div className="sm:hidden large:flex flex sm:justify-end large:-my-28 large:mr-16 relative">
      <div className="bg-blue sm:rounded-xl inline-block sm:w-fit sm:h-fit w-full">
        <div className="large:py-11 large:px-12 sm:py-8 sm:px-8 py-8 px-4">
          {[
            "Highly Professional Staff",
            "100% customer satisfaction",
            "Unrivalled Workmanship, Professional and Qualified",
          ].map((value: string, i: number) => (
            <div className="flex gap-2 p-1" key={i}>
              <img src={checkIcon.src} alt="check icon" />
              <h3 className="font-medium text-lg text-white">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureListCard;
