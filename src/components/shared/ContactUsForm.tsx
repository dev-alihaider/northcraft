"use client"
import React, {useState} from 'react';
import Input from "../common/Input";
import Button from "../common/Button";
import {FormDataProps} from "../landing-page/types";
import {toast} from "react-hot-toast";

export const ContactUsForm:React.FC=()=> {
    const [formData, setFormData] = useState<FormDataProps>({
        name: '',
        email: '',
        phoneNumber: '',
        service: '',
        description: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement|HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(formData);
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Submitted Successfully", {
                    position: "bottom-center"
                });
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    service: '',
                    description: '',
                });
            } else {
                toast.error("Failed to Submit", {
                    position: "bottom-center"
                });
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            toast.error("An error occurred during submission", {
                position: "bottom-center"
            });
        }
    };
    return (
        <div className="md:col-span-2 col-span-1 bg-blue rounded-2xl text-white">
            <div className="large:pt-11 lg:pt-7 pt-4 large:px-16  lg:px-8 px-5">
                <h1 className="font-medium text-2xl  text-center sm:text-left">
                    Request A Quote
                </h1>
                <p className="font-normal large:text-xl lg:text-lg sm:text-base text-sm large:pt-6 lg:pt-4 pt-2 text-center sm:text-left">
                    Complete control over products allow us to our customers the
                    best quality prices and services. We take great pride in
                    everything that we do in Jhontraktor
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-5 ">
                        <Input
                            type="text"
                            name="name"
                            required={true}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="text-black placeholder:text-grayish large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:py-6 lg:py-5 sm:py-4 py-2 large:pl-16 lg:pl-6 pl-4 sm:rounded-2xl rounded-xl w-full"
                        />
                        <Input
                            type="text"
                            name="email"
                            required={true}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="text-black placeholder:text-grayish large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:py-6 lg:py-5 sm:py-4 py-2 large:pl-16 lg:pl-6 pl-4 sm:rounded-2xl rounded-xl w-full"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1  gap-4 pt-4">
                        <Input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="text-black placeholder:text-grayish large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:py-6 lg:py-5 sm:py-4 py-2 large:pl-16 lg:pl-6 pl-4 sm:rounded-2xl rounded-xl w-full"
                        />
                        <Input
                            type="text"
                            name="service"
                            required={true}
                            value={formData.service}
                            onChange={handleChange}
                            placeholder="Select Your Service "
                            className="text-black placeholder:text-grayish large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:py-6 lg:py-5 sm:py-4 py-2 large:pl-16 lg:pl-6 pl-4 sm:rounded-2xl rounded-xl w-full"
                        />
                    </div>

                    <div className="grid grid-cols-2 pt-4">
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Additional Details!"
                className=" col-span-2 h-full text-black large:pb-24  sm:pb-16 pb-8 placeholder:text-grayish large:py-6 lg:py-5 sm:py-4 py-2 large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:pl-16 lg:pl-6 pl-4  rounded-2xl"
            />
                    </div>
                    <Button
                        type="submit"
                        className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg large:mb-12 mb-8 font-normal large:text-xl sm:text-lg text-base py-3 w-full bg-darkGray large:py-6 sm:py-4 text-center rounded-2xl large:mt-6 mt-4">
                        Submit Request
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ContactUsForm;