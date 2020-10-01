import React from "react";
import "./Button.scss";

const Button = ({ text, color, bgColor, outline }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color, borderColor: outline }}
      className='btn'
    >
      {text}
    </button>
  );
};

export default Button;
