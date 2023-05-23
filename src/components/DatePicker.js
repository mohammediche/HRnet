import React from "react";

const DatePicker = ({ handleInputChange, value, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={value}>{label}</label>
      <input required type="date" id={value} name={value} onChange={handleInputChange} />
    </div>
  );
};

export default DatePicker;
