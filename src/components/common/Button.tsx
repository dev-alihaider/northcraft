import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type,
}) => {
  return (
    <div>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
