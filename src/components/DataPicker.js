import React from "react";

const DataPicker = () => {
  return (
    <div className="form-group">
      <label htmlFor="date-of-birth">Date of Birth</label>
      <input type="text" id="date-of-birth" name="date-of-birth" required />
    </div>
  );
};

export default DataPicker;
