/** @format */

import React from "react";

const Button = ({
  onClick,
  innerText,
  className,
  type,
  iconElement,
  hasIcon,
}) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {innerText}
      {hasIcon && iconElement}
    </button>
  );
};

export default Button;
