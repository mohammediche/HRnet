import React from "react";

const DatePicker = ({ handleInputChange, id, value, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input required type="date" id={id} name={id} value={value} onChange={handleInputChange} />
    </div>
  );
};

export default DatePicker;
