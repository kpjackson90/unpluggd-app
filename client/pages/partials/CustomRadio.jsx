import React from "react";

const CustomRadio = ({ label, name }) => {
  return (
    <label class="radio">
      {label}
      <input type="radio" name={name} />
      <span class="checkmark"></span>
    </label>
  );
};

export default CustomRadio;
