import React from "react";
import "./Button.css";

const Button = ({ handleClick }) => {
  return (
    <div className="contenedor__button">
      <i className="bx bx-message-dots" onClick={handleClick}></i>
    </div>
  );
};

export default Button;
