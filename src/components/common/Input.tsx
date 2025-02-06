import React from "react";
import { InputFieldProps } from "./types";

const Input: React.FC<InputFieldProps> = ({
  className = "",
  placeholder = "",
  name = "",
  type = "",
  onChange = () => {},
  value,
  required = false,
  readOnly = false,
  disabled = false,
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border focus:border-black focus:outline-none text-black placeholder:text-grayish large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:py-6 lg:py-5 sm:py-4 py-2 large:pl-16 lg:pl-6 pl-4 sm:rounded-2xl rounded-xl w-full ${className}`}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
    />
  );
};

export default Input;
