import React from "react";
import { InputFieldProps } from "./types";

const Input: React.FC<InputFieldProps> = ({ 
  className = "",
  placeholder = "" 
}) => {
  return <input placeholder={placeholder} className={className} />;
};

export default Input;
