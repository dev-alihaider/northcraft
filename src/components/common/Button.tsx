import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type,
  disabled=false,
}) => {
  return (
    <div>
      <button type={type} className={className} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default Button;
