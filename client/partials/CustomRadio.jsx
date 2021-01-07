import React from "react";

const CustomRadio = ({ label, name, setValue, value }) => {
  return (
    <label className="radio">
      {label}
      <input type="radio" name={name} value={value} onChange={(e) => setValue(e.target.value)}/>
      <span className="checkmark"></span>
    </label>
  );
};

export default CustomRadio;
