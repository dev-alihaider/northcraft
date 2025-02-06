"use client";
import React, { useState } from "react";
import Input from "../common/Input";
import emailjs from "emailjs-com";
import Button from "../common/Button";
import chevronDown from "../../../public/assets/icons/ChevronDown.svg";
import { FormDataProps } from "./types";
import { toast } from "react-hot-toast";
import { buttons, initialFormData, validationSchema } from "./constants";
import { config } from "../../../config";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export const ContactUsForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataProps>(initialFormData);
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState(initialFormData);

  const handleOptionClick = (option) => {
    setFormData({ ...formData, service: option });
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event,) => {
    event.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setIsLoading(true);
      const result = await emailjs.send(
        config.emailjsServiceId,
        config.emailjsTemplateId,
        { ...formData },
        config.emailjsPublicKey,
      );

      if (result.status === 200) {
        toast.success("Email sent successfully", {position: "bottom-center",});
        setFormData(initialFormData);
        setPhone("");
      } else {
        toast.error("An error occurred during submission", {position: "bottom-center",});
      }

      setErrors(initialFormData);
    } catch (error) {
      if (error.inner) {
        const newErrors = error.inner.reduce(
          (acc: Record<string, string>, currError: any) => {
            acc[currError.path] = currError.message;
            return acc;
          }, {},
        );
        setErrors(newErrors);
      } else {
        toast.error("An unexpected error occurred", {
          position: "bottom-center",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:col-span-2 col-span-1 bg-blue rounded-2xl text-white">
      <div className="large:pt-11 lg:pt-7 pt-4 large:px-16  lg:px-8 px-5">
        <h2 className="font-medium text-2xl  text-center sm:text-left">
          Request A Estimate
        </h2>
        <p className="font-normal large:text-xl lg:text-lg sm:text-base text-sm large:pt-6 lg:pt-4 pt-2 text-center sm:text-left">
          Complete control over products allows us to offer our customers,
          especially in Waipapa, Far North, and the surrounding areas, the best
          quality, prices, and services. We take great pride in everything that
          we do.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-5 ">
            <div>
              <Input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
              {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </div>
            <div>
              <Input
                type="text"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-4">
            <div>
              <PhoneInput
                defaultCountry="nz"
                value={phone}
                required
                onChange={(phone) => {
                  setPhone(phone);
                  setFormData((prevData) => ({
                    ...prevData,
                    phoneNumber: phone,
                  }));
                }}
              />
              {errors.phoneNumber && (
                <div style={{ color: "red" }}>{errors.phoneNumber}</div>
              )}
            </div>
            <div>
              <div
                className="relative w-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src={chevronDown.src}
                  alt="Chevron Right"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none md:w-6 md:h-6 w-5 h-5"
                />
                <Input
                  type="text"
                  name="service"
                  required
                  value={formData.service}
                  placeholder="Select Service"
                  className="cursor-pointer caret-transparent "
                />
                {errors.service && (
                  <div style={{ color: "red" }}>{errors.service}</div>
                )}
                {isOpen && (
                  <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-xl shadow-md mt-2">
                    {buttons.map((button, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(button)}
                        className="w-full text-left text-black px-4 py-2 rounded-xl hover:bg-gray-100 focus:bg-gray-100"
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 pt-4">
            <textarea
              name="description"
              value={formData.description}
              required
              onChange={handleChange}
              placeholder="Additional Details!"
              className="border focus:border-black focus:outline-none col-span-2 h-full text-black large:pb-24  sm:pb-16 pb-8 placeholder:text-grayish large:py-6 lg:py-5 sm:py-4 py-2 large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:pl-16 lg:pl-6 pl-4  rounded-2xl"
            />
          </div>
          {errors.description && (
            <div style={{ color: "red" }}>{errors.description}</div>
          )}
          <Button
            disabled={isLoading}
            type="submit"
            className=" transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg large:mb-12 mb-8 font-normal large:text-xl sm:text-lg text-base py-3 w-full bg-darkGray large:py-6 sm:py-4 text-center rounded-2xl large:mt-6 mt-4"
          >
            {isLoading ? (
              <svg
                aria-hidden="true"
                className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Submit Request"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
