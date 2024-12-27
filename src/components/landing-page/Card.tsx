import React from 'react';
import checkIcon from "../../../public/assets/icons/CheckCircleFill.svg"

function Card() {
    return (<div className=" sm:hidden large:flex flex sm:justify-end large:-my-28 large:mr-16  ">
            <div className="bg-blue sm:rounded-xl inline-block sm:w-fit sm:h-fit w-full  ">
                <div className="large:py-11 large:px-12 sm:py-8 sm:px-8 py-8 px-4">
                    <div className="flex gap-2 p-1">
                        <img src={checkIcon.src} alt="check icon"/>
                        <p className="font-medium text-lg text-white">

                            Quality Control System, 100% Satisfaction Guarantee</p>
                    </div>
                    <div className="flex gap-2  p-1">
                        <img src={checkIcon.src} alt="check icon"/>
                        <p className="font-medium text-lg text-white">

                            Highly Profesional Staff, Accurate Testing Processes</p>
                    </div>
                    <div className="flex gap-2 p-1">
                        <img src={checkIcon.src} alt="check icon"/>
                        <p className="font-medium text-lg text-white">

                            Unrivalled Workmanship, Profesional and Qualified</p>
                    </div>
                </div>

            </div>
        </div>);

}

export default Card;