import React from "react";
import "../styles/Button.css"; // Import styles

const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button className={`custom-button ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
