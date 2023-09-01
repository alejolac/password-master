import { useState } from "react";

const Button = ({ text, icon, click, type, handleClickApp }) => {
  const handleClick = () => {
    handleClickApp(type)
  };

  const buttonClassName = click ? "clicked" : "";

  return (
    <button
      className={`custom-button ${buttonClassName}`}
      onClick={handleClick}
    >
      {icon != undefined ? <i className={icon} aria-hidden="true"> </i> : ""} {text}
    </button>
  );
};

export default Button;
