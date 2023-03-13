import React from "react";

const DatePicker = ({ handleInputChangeDate }) => {
  return (
    <div className="form-group">
      <label htmlFor="birthDate">Date of Birth</label>
      <input type="date" id="birthDate" name="birthDate" onChange={handleInputChangeDate} />
    </div>
  );
};

export default DatePicker;
