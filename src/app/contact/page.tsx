import React from "react";
import car from "../../../public/assets/images/carcroped2.jpeg"
import ContactUsForm from "../../components/shared/ContactUsForm";
const page: React.FC = () => {
    return (
        <div className="bg-darkGray h-fixed">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 p-4">
                <div className="col-span-1">
                    <ContactUsForm/>
                </div>
                <div
                    className="bg-cover bg-no-repeat bg-left sm:justify-center rounded-2xl"
                    style={{
                        backgroundImage: `url(${car.src})`,
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default page;
