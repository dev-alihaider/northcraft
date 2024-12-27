import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = "",
  onClick,
}) => {
  return (
    <div>
      <button 
        className={`${className} transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg`} 
        onClick={onClick}
      > 
        {children}
      </button>
    </div>
  );
};

export default Button;
