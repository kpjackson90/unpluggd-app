import React from "react";

const CustomRadio = ({ label, name }) => {
  return (
    <label className="radio">
      {label}
      <input type="radio" name={name} />
      <span className="checkmark"></span>
    </label>
  );
};

export default CustomRadio;
