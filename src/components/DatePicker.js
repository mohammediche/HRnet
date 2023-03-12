import React from "react";

const DatePicker = ({ handleInputChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="birthDate">Date of Birth</label>
      <input type="date" id="birthDate" name="birthDate" onChange={handleInputChange} />
    </div>
  );
};

export default DatePicker;
