import React from "react";
import { InputFieldProps } from "./types";

const Input: React.FC<InputFieldProps> = ({
  className = "",
  placeholder = "",
  name,
  type,
  onChange,
  value,
  required = false,
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      required={required}
    />
  );
};

export default Input;
